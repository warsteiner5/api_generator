import { TradesDeleteDealSigner$Params } from '../../../swagger/fn/trades/trades-delete-deal-signer';

export interface TradesDeleteDealSignerParams {
  tradeId: number;
  userId: number;
}

export const tradesDeleteDealSignerParamsAdapter = {
  adapt(params?: TradesDeleteDealSignerParams): TradesDeleteDealSigner$Params {
    if (!params) {
      return {} as TradesDeleteDealSigner$Params;
    }
    return {
      tradeId: params.tradeId,
      userId: params.userId,
    };
  }
};
