import { MessageAlt } from '../../models/message-alt.interface';
import { TradesAddChatMessage$Params } from '../../../swagger/fn/trades/trades-add-chat-message';
import { apiMessageAltDtoAdapter } from '../../adapters/models/api-message.adapter';

// @ts-ignore
export interface TradesAddChatMessageParams {
  id: number;
  chatId: number;
  body?: MessageAlt;
}

export function tradesAddChatMessageAdapter(params?: TradesAddChatMessageParams): TradesAddChatMessage$Params {
  if (!params) {
    return {} as TradesAddChatMessage$Params;
  }
  return {
      id: params.id,
      chatId: params.chatId,
      body: apiMessageAltDtoAdapter(params.body),
  };
}
