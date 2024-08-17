import React from "react";

// Import the defined types
import { Services, Stats } from "@/types/types";

type ServerDetailsCardProps = {
  title: string;
  region: string;
  status: string;
  roles: string[];
  strict: boolean;
  serverIssue?: string | null;
  services: Services;
  stats: Stats;
};

const ServerDetailsCard: React.FC<ServerDetailsCardProps> = ({
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
    <div className="flex flex-col bg-white p-4 sm:p-6 max-w-full rounded-[10px]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="paragraph-bold md:base-bold">{title}</h3>
        </div>
      </div>
      <div className="mt-4">
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

        <h4>Workers</h4>
        {server.workers.map((workerTuple, idx) => {
          const [name, worker] = workerTuple; // Destructure the tuple
          return (
            <div key={idx} style={{ marginBottom: "10px" }}>
              <h5>{name}</h5>
              <ul>
                <li>
                  <strong>Wait Time:</strong> {worker.wait_time}
                </li>
                <li>
                  <strong>Workers:</strong> {worker.workers}
                </li>
                <li>
                  <strong>Waiting:</strong> {worker.waiting}
                </li>
                <li>
                  <strong>Idle:</strong> {worker.idle}
                </li>
                <li>
                  <strong>Recently Blocked Keys:</strong>
                  {worker.recently_blocked_keys.length > 0 ? (
                    <ul>
                      {worker.recently_blocked_keys.map((key, i) => (
                        <li key={i}>
                          {key[0]} (Count: {key[1]}, Time: {key[2]})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "None"
                  )}
                </li>
                <li>
                  <strong>Top Keys:</strong>
                  {worker.top_keys.length > 0 ? (
                    <ul>
                      {worker.top_keys.map((key, i) => (
                        <li key={i}>
                          {key[0]} (Value: {key[1]})
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "None"
                  )}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServerDetailsCard;
