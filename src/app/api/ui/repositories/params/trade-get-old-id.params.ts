import { TradeGetOldId$Params } from '../../../swagger/fn/trade/trade-get-old-id';

// @ts-ignore
export interface TradeGetOldIdParams {
  oldId: number;
}

export function tradeGetOldIdAdapter(params?: TradeGetOldIdParams): TradeGetOldId$Params {
  if (!params) {
    return {} as TradeGetOldId$Params;
  }
  return {
      oldId: params.oldId,
  };
}
