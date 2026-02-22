import { TradesGetAllChatItems$Params } from '../../../swagger/fn/trades/trades-get-all-chat-items';

// @ts-ignore
export interface TradesGetAllChatItemsParams {
  id: number;
  chatId: number;
  chatItemId: number;
}

export function tradesGetAllChatItemsAdapter(params?: TradesGetAllChatItemsParams): TradesGetAllChatItems$Params {
  if (!params) {
    return {} as TradesGetAllChatItems$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
      chatItemId: params.chatItemId,
  };
}
