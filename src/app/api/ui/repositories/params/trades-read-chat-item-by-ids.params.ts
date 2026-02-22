import { TradesReadChatItemByIds$Params } from '../../../swagger/fn/trades/trades-read-chat-item-by-ids';

// @ts-ignore
export interface TradesReadChatItemByIdsParams {
  id: number;
  chatId: number;
  body?: number[];
}

export function tradesReadChatItemByIdsAdapter(params?: TradesReadChatItemByIdsParams): TradesReadChatItemByIds$Params {
  if (!params) {
    return {} as TradesReadChatItemByIds$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
      body: params.body,
  };
}
