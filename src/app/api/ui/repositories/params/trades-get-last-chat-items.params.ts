import { TradesGetLastChatItems$Params } from '../../../swagger/fn/trades/trades-get-last-chat-items';

// @ts-ignore
export interface TradesGetLastChatItemsParams {
  id: number;
  chatId: number;
  lastId: number;
}

export function tradesGetLastChatItemsAdapter(params?: TradesGetLastChatItemsParams): TradesGetLastChatItems$Params {
  if (!params) {
    return {} as TradesGetLastChatItems$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
      lastId: params.lastId,
  };
}
