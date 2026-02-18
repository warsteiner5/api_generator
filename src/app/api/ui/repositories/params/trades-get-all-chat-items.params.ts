import { TradesGetAllChatItems$Params } from '../../../swagger/fn/trades/trades-get-all-chat-items';

export interface TradesGetAllChatItemsParams {
  id: number;
  chatId: number;
  chatItemId: number;
}

export const tradesGetAllChatItemsParamsAdapter = {
  adapt(params?: TradesGetAllChatItemsParams): TradesGetAllChatItems$Params {
    if (!params) {
      return {} as TradesGetAllChatItems$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
      chatItemId: params.chatItemId,
    };
  }
};
