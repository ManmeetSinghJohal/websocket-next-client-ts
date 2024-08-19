import React from "react";
import ServerCard from "./ServerCard";

import { ServerCardsContainerProps } from "@/types/types";
import ServerStatusCircle from "./ServerStatusCircle";

const ServerCardsContainer: React.FC<ServerCardsContainerProps> = ({
  data,
}) => {
  return (
    <div>
      <div className="flex justify-center mb-12 gap-2 sm:gap-6">
        {data.map((item, index) => (
          <ServerStatusCircle
            status={item.data.status}
            region={item.data.region}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {data.map((item, index) => (
          <ServerCard
            key={index}
            title={`${(item.data.region || "").toUpperCase()}`}
            region={item.data.region}
            status={item.data.status}
            roles={item.data.roles}
            strict={item.data.strict}
            serverIssue={item.data.server_issue}
            services={item.data.results.services}
            stats={item.data.results.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default ServerCardsContainer;
