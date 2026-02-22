import { TradesReadAllItemsFromId$Params } from '../../../swagger/fn/trades/trades-read-all-items-from-id';

// @ts-ignore
export interface TradesReadAllItemsFromIdParams {
  id: number;
  chatId: number;
  itemId: number;
}

export function tradesReadAllItemsFromIdAdapter(params?: TradesReadAllItemsFromIdParams): TradesReadAllItemsFromId$Params {
  if (!params) {
    return {} as TradesReadAllItemsFromId$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
      itemId: params.itemId,
  };
}
