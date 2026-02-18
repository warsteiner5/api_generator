import { TradesGetChatsUnreadItems$Params } from '../../../swagger/fn/trades/trades-get-chats-unread-items';

export interface TradesGetChatsUnreadItemsParams {
  id: number;
}

export const tradesGetChatsUnreadItemsParamsAdapter = {
  adapt(params?: TradesGetChatsUnreadItemsParams): TradesGetChatsUnreadItems$Params {
    if (!params) {
      return {} as TradesGetChatsUnreadItems$Params;
    }
    return {
      id: params.id,
    };
  }
};
