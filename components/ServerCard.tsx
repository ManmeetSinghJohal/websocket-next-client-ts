import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Import the defined types
import { Services, Stats } from "@/types/types";

type ServerCardProps = {
  title: string;
  region: string;
  status: string;
  roles: string[];
  strict: boolean;
  serverIssue?: string | null;
  services: Services;
  stats: Stats;
};

const ServerCard: React.FC<ServerCardProps> = ({
  title,
  region,
  status,
  roles,
  strict,
  serverIssue,
  services,
  stats,
}) => {
  const { server } = stats;

  return (
    <div className="bg-white-200 p-4 sm:p-6 rounded-[10px] border">
      <div className="flex justify-center mb-6">
        <h3 className="font-bold sm:text-2xl">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex-grow rounded-md border p-4 bg-white-100">
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Status:</strong> {status}
          </p>
          <p>
            <strong>Roles:</strong> {roles.join(", ")}
          </p>
          <p>
            <strong>Strict Mode:</strong> {strict ? "Enabled" : "Disabled"}
          </p>
          <p>
            <strong>Server Issue:</strong> {serverIssue || "None"}
          </p>
        </div>
        <div className="flex-grow rounded-md border p-4 bg-white-100">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl">Services</h4>
          </div>
          <ul>
            <li>
              <strong>Redis:</strong> {services.redis ? "Operational" : "Down"}
            </li>
            <li>
              <strong>Database:</strong>{" "}
              {services.database ? "Operational" : "Down"}
            </li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2 flex-grow rounded-md border p-4 bg-white-100">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl">Stats</h4>
          </div>
          <ul>
            <li>
              <strong>Servers Count:</strong> {stats.servers_count}
            </li>
            <li>
              <strong>Online Users:</strong> {stats.online}
            </li>
            <li>
              <strong>Session:</strong> {stats.session}
            </li>
            <li>
              <strong>Active Connections:</strong> {server.active_connections}
            </li>
            <li>
              <strong>CPU Load:</strong> {server.cpu_load}
            </li>
            <li>
              <strong>Timers:</strong> {server.timers}
            </li>
          </ul>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Link href={`/${region}`}>
            <Button variant="outline">More Info</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerCard;
