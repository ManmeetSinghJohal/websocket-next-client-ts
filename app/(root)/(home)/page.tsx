"use client";

import React, { useState, useEffect } from "react";
import ServerCardsContainer from "@/components/ServerCardsContainer";
import useWebSocket from "react-use-websocket";
import { RingLoader } from "react-spinners";

export default function Home() {
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

  return (
    <div className="bg-white-300">
      <div className="mx-auto max-w-[1440px] pt-12">
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <RingLoader color="#d80ee7" loading={loading} size={150} />
          </div>
        ) : (
          <div className="px-4 pb-10">
            <ServerCardsContainer data={lastJsonMessage as EndpointData[]} />
          </div>
        )}
      </div>
    </div>
  );
}
