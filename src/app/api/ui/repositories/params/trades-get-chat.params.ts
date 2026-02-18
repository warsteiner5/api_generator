import { TradesGetChat$Params } from '../../../swagger/fn/trades/trades-get-chat';

export interface TradesGetChatParams {
  id: number;
  chatId: number;
}

export const tradesGetChatParamsAdapter = {
  adapt(params?: TradesGetChatParams): TradesGetChat$Params {
    if (!params) {
      return {} as TradesGetChat$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
    };
  }
};
