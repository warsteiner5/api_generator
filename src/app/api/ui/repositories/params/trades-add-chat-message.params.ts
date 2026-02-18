import { MessageAlt } from '../../models/message-alt.interface';
import { TradesAddChatMessage$Params } from '../../../swagger/fn/trades/trades-add-chat-message';
import { adaptApiMessageAltDto } from '../../adapters/toDto/api-message.adapter';

export interface TradesAddChatMessageParams {
  id: number;
  chatId: number;
  body?: MessageAlt;
}

export const tradesAddChatMessageParamsAdapter = {
  adapt(params?: TradesAddChatMessageParams): TradesAddChatMessage$Params {
    if (!params) {
      return {} as TradesAddChatMessage$Params;
    }
    return {
      id: params.id,
      chatId: params.chatId,
      body: adaptApiMessageAltDto(params.body),
    };
  }
};
