import { TradesGetChats$Params } from '../../../swagger/fn/trades/trades-get-chats';

// @ts-ignore
export interface TradesGetChatsParams {
  id: number;
}

export function tradesGetChatsAdapter(params?: TradesGetChatsParams): TradesGetChats$Params {
  if (!params) {
    return {} as TradesGetChats$Params;
  }
  return {
      id: params.id,
  };
}
