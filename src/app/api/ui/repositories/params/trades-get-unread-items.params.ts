import { TradesGetUnreadItems$Params } from '../../../swagger/fn/trades/trades-get-unread-items';

// @ts-ignore
export interface TradesGetUnreadItemsParams {
  id: number;
  chatId: number;
}

export function tradesGetUnreadItemsAdapter(params?: TradesGetUnreadItemsParams): TradesGetUnreadItems$Params {
  if (!params) {
    return {} as TradesGetUnreadItems$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
  };
}
