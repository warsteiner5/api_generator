import { ItemIdAmountAlt } from '../../models/item-id-amount-alt.interface';
import { TradesGetChatItems$Params } from '../../../swagger/fn/trades/trades-get-chat-items';
import { apiItemIdAmountAltDtoAdapter } from '../../adapters/models/api-item-id-amount.adapter';

// @ts-ignore
export interface TradesGetChatItemsParams {
  id: number;
  chatId: number;
  body?: ItemIdAmountAlt;
}

export function tradesGetChatItemsAdapter(params?: TradesGetChatItemsParams): TradesGetChatItems$Params {
  if (!params) {
    return {} as TradesGetChatItems$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
      body: apiItemIdAmountAltDtoAdapter(params.body),
  };
}
