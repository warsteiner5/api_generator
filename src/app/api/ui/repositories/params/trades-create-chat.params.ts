import { TradesCreateChat$Params } from '../../../swagger/fn/trades/trades-create-chat';

// @ts-ignore
export interface TradesCreateChatParams {
  id: number;
}

export function tradesCreateChatAdapter(params?: TradesCreateChatParams): TradesCreateChat$Params {
  if (!params) {
    return {} as TradesCreateChat$Params;
  }
  return {
      id: params.id,
  };
}
