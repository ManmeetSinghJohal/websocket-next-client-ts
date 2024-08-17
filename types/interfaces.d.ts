interface Worker {
  wait_time: number;
  workers: number;
  waiting: number;
  idle: number;
  time_to_return: number;
  recently_blocked_keys: [string, number, string][];
  top_keys: [string, number][];
}

interface Server {
  active_connections: number;
  wait_time: number;
  workers: [string, Worker][];
  cpu_load: number;
  timers: number;
}

interface Stats {
  servers_count: number;
  online: number;
  session: number;
  server: Server;
}

interface Results {
  services: {
    redis: boolean;
    database: boolean;
  };
  stats: Stats;
}

interface EndpointData {
  endpoint: string;
  data: {
    status: string;
    region: string;
    roles: string[];
    results: Results;
    strict: boolean;
    server_issue: any;
  };
}

interface ServerCardsContainerProps {
  lastJsonMessage: EndpointData[];
}

