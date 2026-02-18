import { ApplicationGetApplicationInfo$Params } from '../../../swagger/fn/application/application-get-application-info';

export interface ApplicationGetApplicationInfoParams {
  id: number;
}

export const applicationGetApplicationInfoParamsAdapter = {
  adapt(params?: ApplicationGetApplicationInfoParams): ApplicationGetApplicationInfo$Params {
    if (!params) {
      return {} as ApplicationGetApplicationInfo$Params;
    }
    return {
      id: params.id,
    };
  }
};
