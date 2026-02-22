import { ApplicationGetApplicationInfo$Params } from '../../../swagger/fn/application/application-get-application-info';

// @ts-ignore
export interface ApplicationGetApplicationInfoParams {
  id: number;
}

export function applicationGetApplicationInfoAdapter(params?: ApplicationGetApplicationInfoParams): ApplicationGetApplicationInfo$Params {
  if (!params) {
    return {} as ApplicationGetApplicationInfo$Params;
  }
  return {
      id: params.id,
  };
}
