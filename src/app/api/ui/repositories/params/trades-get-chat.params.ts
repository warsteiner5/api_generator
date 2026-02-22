import { TradesGetChat$Params } from '../../../swagger/fn/trades/trades-get-chat';

// @ts-ignore
export interface TradesGetChatParams {
  id: number;
  chatId: number;
}

export function tradesGetChatAdapter(params?: TradesGetChatParams): TradesGetChat$Params {
  if (!params) {
    return {} as TradesGetChat$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
  };
}
