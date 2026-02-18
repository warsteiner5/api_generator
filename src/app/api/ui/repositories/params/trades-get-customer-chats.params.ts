import { TradesGetCustomerChats$Params } from '../../../swagger/fn/trades/trades-get-customer-chats';

export interface TradesGetCustomerChatsParams {
  id: number;
}

export const tradesGetCustomerChatsParamsAdapter = {
  adapt(params?: TradesGetCustomerChatsParams): TradesGetCustomerChats$Params {
    if (!params) {
      return {} as TradesGetCustomerChats$Params;
    }
    return {
      id: params.id,
    };
  }
};
