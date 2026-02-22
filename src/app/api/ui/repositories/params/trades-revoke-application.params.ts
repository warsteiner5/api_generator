import { TradesRevokeApplication$Params } from '../../../swagger/fn/trades/trades-revoke-application';

// @ts-ignore
export interface TradesRevokeApplicationParams {
  tradeId: number;
  applicationId: number;
}

export function tradesRevokeApplicationAdapter(params?: TradesRevokeApplicationParams): TradesRevokeApplication$Params {
  if (!params) {
    return {} as TradesRevokeApplication$Params;
  }
  return {
      tradeId: params.tradeId,
      applicationId: params.applicationId,
  };
}
