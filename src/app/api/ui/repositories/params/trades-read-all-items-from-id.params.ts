import { TradesReadAllItemsFromId$Params } from '../../../swagger/fn/trades/trades-read-all-items-from-id';

export interface TradesReadAllItemsFromIdParams {
  id: number;
  chatId: number;
  itemId: number;
}

export const tradesReadAllItemsFromIdParamsAdapter = {
  adapt(params?: TradesReadAllItemsFromIdParams): TradesReadAllItemsFromId$Params {
    if (!params) {
      return {} as TradesReadAllItemsFromId$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
      itemId: params.itemId,
    };
  }
};
