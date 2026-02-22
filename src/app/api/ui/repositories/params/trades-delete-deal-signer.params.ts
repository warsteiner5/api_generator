import { TradesDeleteDealSigner$Params } from '../../../swagger/fn/trades/trades-delete-deal-signer';

// @ts-ignore
export interface TradesDeleteDealSignerParams {
  tradeId: number;
  userId: number;
}

export function tradesDeleteDealSignerAdapter(params?: TradesDeleteDealSignerParams): TradesDeleteDealSigner$Params {
  if (!params) {
    return {} as TradesDeleteDealSigner$Params;
  }
  return {
      tradeId: params.tradeId,
      userId: params.userId,
  };
}
