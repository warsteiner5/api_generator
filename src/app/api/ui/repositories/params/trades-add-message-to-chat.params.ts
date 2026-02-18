import { MessageAlt } from '../../models/message-alt.interface';
import { TradesAddMessageToChat$Params } from '../../../swagger/fn/trades/trades-add-message-to-chat';
import { adaptApiMessageAltDto } from '../../adapters/toDto/api-message.adapter';

export interface TradesAddMessageToChatParams {
  id: number;
  chatOwnerId: number;
  body?: MessageAlt;
}

export const tradesAddMessageToChatParamsAdapter = {
  adapt(params?: TradesAddMessageToChatParams): TradesAddMessageToChat$Params {
    if (!params) {
      return {} as TradesAddMessageToChat$Params;
    }
    return {
      id: params.id,
      chatOwnerId: params.chatOwnerId,
      body: adaptApiMessageAltDto(params.body),
    };
  }
};
