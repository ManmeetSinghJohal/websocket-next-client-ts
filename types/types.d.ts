export type Worker = {
  wait_time: number;
  workers: number;
  waiting: number;
  idle: number;
  time_to_return: number;
  recently_blocked_keys: [string, number, string][];
  top_keys: [string, number][];
};

export type ServerStats = {
  active_connections: number;
  wait_time: number;
  workers: [string, Worker][];
  cpu_load: number;
  timers: number;
};

export type Services = {
  redis: boolean;
  database: boolean;
};

export type Stats = {
  servers_count: number;
  online: number;
  session: number;
  server: ServerStats;
};

export type Results = {
  services: Services;
  stats: Stats;
};

export type ServerData = {
  status: string;
  region: string;
  roles: string[];
  results: Results;
  strict: boolean;
  server_issue: string | null;
};

export type ServerDetailsCardProps = {
  title: string;
  region: string;
  status: string;
  roles: string[];
  strict: boolean;
  serverIssue?: string | null;
  services: Services;
  stats: Stats;
};

export type ServerCardsContainerProps = {
  data: EndpointData[];
};

export type ServerCardProps = {
  title: string;
  region: string;
  status: string;
  roles: string[];
  strict: boolean;
  serverIssue?: string | null;
  services: Services;
  stats: Stats;
};

export type SocialLinks = {
  src: string;
  alt: string;
  url: string;
};
