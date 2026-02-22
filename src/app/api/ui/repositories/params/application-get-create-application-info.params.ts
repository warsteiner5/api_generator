import { ApplicationGetCreateApplicationInfo$Params } from '../../../swagger/fn/application/application-get-create-application-info';

// @ts-ignore
export interface ApplicationGetCreateApplicationInfoParams {
  id: number;
}

export function applicationGetCreateApplicationInfoAdapter(params?: ApplicationGetCreateApplicationInfoParams): ApplicationGetCreateApplicationInfo$Params {
  if (!params) {
    return {} as ApplicationGetCreateApplicationInfo$Params;
  }
  return {
      id: params.id,
  };
}
