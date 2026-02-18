import { TradesGetChats$Params } from '../../../swagger/fn/trades/trades-get-chats';

export interface TradesGetChatsParams {
  id: number;
}

export const tradesGetChatsParamsAdapter = {
  adapt(params?: TradesGetChatsParams): TradesGetChats$Params {
    if (!params) {
      return {} as TradesGetChats$Params;
    }
    return {
      id: params.id,
    };
  }
};
