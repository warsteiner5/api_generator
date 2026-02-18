import { TradesGetApplicationInfo$Params } from '../../../swagger/fn/trades/trades-get-application-info';

export interface TradesGetApplicationInfoParams {
  id: number;
  applicationId: number;
}

export const tradesGetApplicationInfoParamsAdapter = {
  adapt(params?: TradesGetApplicationInfoParams): TradesGetApplicationInfo$Params {
    if (!params) {
      return {} as TradesGetApplicationInfo$Params;
    }
    return {
      id: params.id,
      applicationId: params.applicationId,
    };
  }
};
