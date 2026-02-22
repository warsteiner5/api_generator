import { MessageAlt } from '../../models/message-alt.interface';
import { TradesAddMessageToChat$Params } from '../../../swagger/fn/trades/trades-add-message-to-chat';
import { apiMessageAltDtoAdapter } from '../../adapters/models/api-message.adapter';

// @ts-ignore
export interface TradesAddMessageToChatParams {
  id: number;
  chatOwnerId: number;
  body?: MessageAlt;
}

export function tradesAddMessageToChatAdapter(params?: TradesAddMessageToChatParams): TradesAddMessageToChat$Params {
  if (!params) {
    return {} as TradesAddMessageToChat$Params;
  }
  return {
      id: params.id,
      chatOwnerId: params.chatOwnerId,
      body: apiMessageAltDtoAdapter(params.body),
  };
}
