import { ApplicationGetApplicationsByTradeId$Params } from '../../../swagger/fn/application/application-get-applications-by-trade-id';

// @ts-ignore
export interface ApplicationGetApplicationsByTradeIdParams {
  id: number;
}

export function applicationGetApplicationsByTradeIdAdapter(params?: ApplicationGetApplicationsByTradeIdParams): ApplicationGetApplicationsByTradeId$Params {
  if (!params) {
    return {} as ApplicationGetApplicationsByTradeId$Params;
  }
  return {
      id: params.id,
  };
}
