import { TradesGetUnreadItemsCount$Params } from '../../../swagger/fn/trades/trades-get-unread-items-count';

// @ts-ignore
export interface TradesGetUnreadItemsCountParams {
  id: number;
  chatId: number;
}

export function tradesGetUnreadItemsCountAdapter(params?: TradesGetUnreadItemsCountParams): TradesGetUnreadItemsCount$Params {
  if (!params) {
    return {} as TradesGetUnreadItemsCount$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
  };
}
