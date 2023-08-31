export interface ApiInitOptions {
  isServer?: boolean;
  isSecured?: boolean;
}

export interface GetReqProps extends ApiInitOptions {
  path: string;
}
