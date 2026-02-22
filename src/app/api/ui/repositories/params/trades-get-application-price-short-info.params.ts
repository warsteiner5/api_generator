import { TradesGetApplicationPriceShortInfo$Params } from '../../../swagger/fn/trades/trades-get-application-price-short-info';

// @ts-ignore
export interface TradesGetApplicationPriceShortInfoParams {
  applicationId: number;
}

export function tradesGetApplicationPriceShortInfoAdapter(params?: TradesGetApplicationPriceShortInfoParams): TradesGetApplicationPriceShortInfo$Params {
  if (!params) {
    return {} as TradesGetApplicationPriceShortInfo$Params;
  }
  return {
      applicationId: params.applicationId,
  };
}
