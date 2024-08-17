import React from "react";
import Link from "next/link";

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
    <Link href={`/${region}`}>
      <div className="flex flex-col justify-between bg-white p-4 sm:p-6 rounded-[10px] border h-full">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="paragraph-bold md:base-bold">{title}</h3>
          </div>
        </div>
        <div className="mt-4 flex-grow">
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

          <h4>Services</h4>
          <ul>
            <li>
              <strong>Redis:</strong> {services.redis ? "Operational" : "Down"}
            </li>
            <li>
              <strong>Database:</strong>{" "}
              {services.database ? "Operational" : "Down"}
            </li>
          </ul>

          <h4>Stats</h4>
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
      </div>
    </Link>
  );
};

export default ServerCard;
