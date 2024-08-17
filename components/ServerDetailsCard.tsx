import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-4 sm:p-6 rounded-[10px] border">
      <div className="flex justify-center mb-6">
        <h3 className="font-bold sm:text-3xl">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="col-span-1 flex-grow rounded-md border p-4 bg-slate-200">
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
        <div className="col-span-1 flex-grow rounded-md border p-4 bg-slate-200">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl lg:text-2xl">Services</h4>
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
        <div className="col-span-1 flex-grow rounded-md border p-4 bg-slate-200">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl lg:text-2xl">Stats</h4>
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
        <div className="col-span-1 sm:col-span-3 flex-grow rounded-md border p-4 bg-slate-200">
          <div className="flex justify-center mb-3">
            <h4 className="font-semibold sm:text-xl lg:text-2xl">Workers</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {server.workers.map((workerTuple, idx) => {
              const [name, worker] = workerTuple; // Destructure the tuple
              return (
                <div key={idx} className="flex-grow rounded-md border border-white-100 p-4">
                  <div className="flex justify-center mb-3">
                    <h4 className="font-medium uppercase text-center lg:text-xl">
                      {name}
                    </h4>
                  </div>
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
        <div className="col-span-1 sm:col-span-3">
          <Link href={`/`}>
            <Button variant="outline">Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServerDetailsCard;
