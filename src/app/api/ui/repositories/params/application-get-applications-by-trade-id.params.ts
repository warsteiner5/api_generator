import { ApplicationGetApplicationsByTradeId$Params } from '../../../swagger/fn/application/application-get-applications-by-trade-id';

export interface ApplicationGetApplicationsByTradeIdParams {
  id: number;
}

export const applicationGetApplicationsByTradeIdParamsAdapter = {
  adapt(params?: ApplicationGetApplicationsByTradeIdParams): ApplicationGetApplicationsByTradeId$Params {
    if (!params) {
      return {} as ApplicationGetApplicationsByTradeId$Params;
    }
    return {
      id: params.id,
    };
  }
};
