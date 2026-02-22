import { TradesGetApplicationInfo$Params } from '../../../swagger/fn/trades/trades-get-application-info';

// @ts-ignore
export interface TradesGetApplicationInfoParams {
  id: number;
  applicationId: number;
}

export function tradesGetApplicationInfoAdapter(params?: TradesGetApplicationInfoParams): TradesGetApplicationInfo$Params {
  if (!params) {
    return {} as TradesGetApplicationInfo$Params;
  }
  return {
      id: params.id,
      applicationId: params.applicationId,
  };
}
