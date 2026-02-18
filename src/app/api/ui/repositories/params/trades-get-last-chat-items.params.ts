import { TradesGetLastChatItems$Params } from '../../../swagger/fn/trades/trades-get-last-chat-items';

export interface TradesGetLastChatItemsParams {
  id: number;
  chatId: number;
  lastId: number;
}

export const tradesGetLastChatItemsParamsAdapter = {
  adapt(params?: TradesGetLastChatItemsParams): TradesGetLastChatItems$Params {
    if (!params) {
      return {} as TradesGetLastChatItems$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
      lastId: params.lastId,
    };
  }
};
