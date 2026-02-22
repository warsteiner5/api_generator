import { TradesGetCustomerChats$Params } from '../../../swagger/fn/trades/trades-get-customer-chats';

// @ts-ignore
export interface TradesGetCustomerChatsParams {
  id: number;
}

export function tradesGetCustomerChatsAdapter(params?: TradesGetCustomerChatsParams): TradesGetCustomerChats$Params {
  if (!params) {
    return {} as TradesGetCustomerChats$Params;
  }
  return {
      id: params.id,
  };
}
