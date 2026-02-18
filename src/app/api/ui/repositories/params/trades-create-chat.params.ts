import { TradesCreateChat$Params } from '../../../swagger/fn/trades/trades-create-chat';

export interface TradesCreateChatParams {
  id: number;
}

export const tradesCreateChatParamsAdapter = {
  adapt(params?: TradesCreateChatParams): TradesCreateChat$Params {
    if (!params) {
      return {} as TradesCreateChat$Params;
    }
    return {
      id: params.id,
    };
  }
};
