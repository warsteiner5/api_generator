import { TradesRevokeApplication$Params } from '../../../swagger/fn/trades/trades-revoke-application';

export interface TradesRevokeApplicationParams {
  tradeId: number;
  applicationId: number;
}

export const tradesRevokeApplicationParamsAdapter = {
  adapt(params?: TradesRevokeApplicationParams): TradesRevokeApplication$Params {
    if (!params) {
      return {} as TradesRevokeApplication$Params;
    }
    return {
      tradeId: params.tradeId,
      applicationId: params.applicationId,
    };
  }
};
