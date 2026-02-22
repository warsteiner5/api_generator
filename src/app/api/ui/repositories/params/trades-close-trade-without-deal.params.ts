import { TradesCloseTradeWithoutDeal$Params } from '../../../swagger/fn/trades/trades-close-trade-without-deal';

// @ts-ignore
export interface TradesCloseTradeWithoutDealParams {
  id: number;
}

export function tradesCloseTradeWithoutDealAdapter(params?: TradesCloseTradeWithoutDealParams): TradesCloseTradeWithoutDeal$Params {
  if (!params) {
    return {} as TradesCloseTradeWithoutDeal$Params;
  }
  return {
      id: params.id,
  };
}
