import { TradesGetChatFiles$Params } from '../../../swagger/fn/trades/trades-get-chat-files';

// @ts-ignore
export interface TradesGetChatFilesParams {
  chatId: number;
}

export function tradesGetChatFilesAdapter(params?: TradesGetChatFilesParams): TradesGetChatFiles$Params {
  if (!params) {
    return {} as TradesGetChatFiles$Params;
  }
  return {
      chatId: params.chatId,
  };
}
