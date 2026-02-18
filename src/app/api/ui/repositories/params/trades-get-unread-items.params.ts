import { TradesGetUnreadItems$Params } from '../../../swagger/fn/trades/trades-get-unread-items';

export interface TradesGetUnreadItemsParams {
  id: number;
  chatId: number;
}

export const tradesGetUnreadItemsParamsAdapter = {
  adapt(params?: TradesGetUnreadItemsParams): TradesGetUnreadItems$Params {
    if (!params) {
      return {} as TradesGetUnreadItems$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
    };
  }
};
