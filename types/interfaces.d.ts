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
