import { ItemIdAmountAlt } from '../../models/item-id-amount-alt.interface';
import { TradesGetChatItems$Params } from '../../../swagger/fn/trades/trades-get-chat-items';
import { adaptApiItemIdAmountAltDto } from '../../adapters/toDto/api-item-id-amount.adapter';

export interface TradesGetChatItemsParams {
  id: number;
  chatId: number;
  body?: ItemIdAmountAlt;
}

export const tradesGetChatItemsParamsAdapter = {
  adapt(params?: TradesGetChatItemsParams): TradesGetChatItems$Params {
    if (!params) {
      return {} as TradesGetChatItems$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
      body: adaptApiItemIdAmountAltDto(params.body),
    };
  }
};
