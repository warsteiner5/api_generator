import { TradesGetChatsUnreadItems$Params } from '../../../swagger/fn/trades/trades-get-chats-unread-items';

// @ts-ignore
export interface TradesGetChatsUnreadItemsParams {
  id: number;
}

export function tradesGetChatsUnreadItemsAdapter(params?: TradesGetChatsUnreadItemsParams): TradesGetChatsUnreadItems$Params {
  if (!params) {
    return {} as TradesGetChatsUnreadItems$Params;
  }
  return {
      id: params.id,
  };
}
