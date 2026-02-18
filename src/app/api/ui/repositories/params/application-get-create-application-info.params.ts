import { ApplicationGetCreateApplicationInfo$Params } from '../../../swagger/fn/application/application-get-create-application-info';

export interface ApplicationGetCreateApplicationInfoParams {
  id: number;
}

export const applicationGetCreateApplicationInfoParamsAdapter = {
  adapt(params?: ApplicationGetCreateApplicationInfoParams): ApplicationGetCreateApplicationInfo$Params {
    if (!params) {
      return {} as ApplicationGetCreateApplicationInfo$Params;
    }
    return {
      id: params.id,
    };
  }
};
