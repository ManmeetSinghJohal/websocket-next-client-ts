"use client";

import React, { useState, useEffect } from "react";
import ServerDetailsCard from "@/components/ServerDetailsCard";
import useWebSocket from "react-use-websocket";
import { RingLoader } from "react-spinners";

const ServerDetails = ({ params }: { params: { serverId: string } }) => {
  const WS_URL: string =
    process.env.WS_URL || "wss://websocket-server-mj.onrender.com";

  const { lastJsonMessage } = useWebSocket(WS_URL);

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false when data is received
    if (lastJsonMessage) {
      setLoading(false);
    }
  }, [lastJsonMessage]);

  // Ensure serverData is derived correctly
  const data = (lastJsonMessage as EndpointData[]) || [];
  const serverData = data.find((item) => item.data.region === params.serverId);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white-300">
        <RingLoader color="#d80ee7" loading={loading} size={150} />
      </div>
    );
  }

  if (!serverData) {
    return <div>No data found for the selected server.</div>;
  }

  return (
    <div className="bg-white-300 ">
      <div className="mx-auto max-w-[1440px] py-12">
        <ServerDetailsCard
          title={`${(serverData.data.region || "").toUpperCase()}`}
          region={serverData.data.region}
          status={serverData.data.status}
          roles={serverData.data.roles}
          strict={serverData.data.strict}
          serverIssue={serverData.data.server_issue}
          services={serverData.data.results.services}
          stats={serverData.data.results.stats}
        />
      </div>
    </div>
  );
};

export default ServerDetails;
