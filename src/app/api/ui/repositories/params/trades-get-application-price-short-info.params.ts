import { TradesGetApplicationPriceShortInfo$Params } from '../../../swagger/fn/trades/trades-get-application-price-short-info';

export interface TradesGetApplicationPriceShortInfoParams {
  applicationId: number;
}

export const tradesGetApplicationPriceShortInfoParamsAdapter = {
  adapt(params?: TradesGetApplicationPriceShortInfoParams): TradesGetApplicationPriceShortInfo$Params {
    if (!params) {
      return {} as TradesGetApplicationPriceShortInfo$Params;
    }
    return {
      applicationId: params.applicationId,
    };
  }
};
