"use client";

import React, { useState, useEffect } from "react";
import ServerCardsContainer from "@/components/ServerCardsContainer";
import useWebSocket from "react-use-websocket";
import { RingLoader } from "react-spinners"; 

export default function Home() {
  const WS_URL = "ws://127.0.0.1:8000";
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
    <div>
      <div className=" h-screen">
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
