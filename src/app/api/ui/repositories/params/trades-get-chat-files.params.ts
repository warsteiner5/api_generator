import { TradesGetChatFiles$Params } from '../../../swagger/fn/trades/trades-get-chat-files';

export interface TradesGetChatFilesParams {
  chatId: number;
}

export const tradesGetChatFilesParamsAdapter = {
  adapt(params?: TradesGetChatFilesParams): TradesGetChatFiles$Params {
    if (!params) {
      return {} as TradesGetChatFiles$Params;
    }
    return {
      chatId: params.chatId,
    };
  }
};
