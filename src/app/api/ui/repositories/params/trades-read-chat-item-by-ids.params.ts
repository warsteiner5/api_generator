import { TradesReadChatItemByIds$Params } from '../../../swagger/fn/trades/trades-read-chat-item-by-ids';

export interface TradesReadChatItemByIdsParams {
  id: number;
  chatId: number;
  body?: number[];
}

export const tradesReadChatItemByIdsParamsAdapter = {
  adapt(params?: TradesReadChatItemByIdsParams): TradesReadChatItemByIds$Params {
    if (!params) {
      return {} as TradesReadChatItemByIds$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
      body: params.body,
    };
  }
};
