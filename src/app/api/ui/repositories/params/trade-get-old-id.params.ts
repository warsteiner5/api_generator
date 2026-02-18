import { TradeGetOldId$Params } from '../../../swagger/fn/trade/trade-get-old-id';

export interface TradeGetOldIdParams {
  oldId: number;
}

export const tradeGetOldIdParamsAdapter = {
  adapt(params?: TradeGetOldIdParams): TradeGetOldId$Params {
    if (!params) {
      return {} as TradeGetOldId$Params;
    }
    return {
      oldId: params.oldId,
    };
  }
};
