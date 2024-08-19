import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Import the defined types
import { ServerCardProps } from "@/types/types";
import CircularProgressBar from "./CircularProgressBar";

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

  // Determine the text color based on status
  const statusFontColor = status === "ok" ? "text-lime-500" : "text-red-500";

  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-4 sm:p-6 rounded-[10px] border shadow-2xl">
      <div className="flex justify-center mb-6">
        <h3 className="font-bold sm:text-2xl">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex-grow rounded-md border p-4 bg-slate-200 shadow-xl">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl text-lg">Server</h4>
          </div>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Status:</strong>
            <span className={`${statusFontColor} font-bold`}> {status}</span>
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
        <div className="flex-grow rounded-md border p-4 bg-slate-200 shadow-xl">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl text-lg">Services</h4>
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
        <div className="flex-grow rounded-md border p-4 bg-slate-200 shadow-xl">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl text-lg">Stats</h4>
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
        <div className="flex-grow rounded-md border p-4 bg-slate-200 flex flex-col items-center shadow-xl">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl text-lg">CPU Load</h4>
          </div>
          <div className="flex-grow flex items-center justify-center mt-4 sm:mt-0">
            <CircularProgressBar progress={server.cpu_load} />
          </div>
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
