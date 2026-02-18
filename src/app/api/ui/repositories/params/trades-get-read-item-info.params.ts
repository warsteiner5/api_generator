import { TradesGetReadItemInfo$Params } from '../../../swagger/fn/trades/trades-get-read-item-info';

export interface TradesGetReadItemInfoParams {
  id: number;
  itemId: number;
}

export const tradesGetReadItemInfoParamsAdapter = {
  adapt(params?: TradesGetReadItemInfoParams): TradesGetReadItemInfo$Params {
    if (!params) {
      return {} as TradesGetReadItemInfo$Params;
    }
    return {
      id: params.id,
      itemId: params.itemId,
    };
  }
};
