import { ApiAddChatMessageRequestAltDto } from '../../../swagger/models/api-add-chat-message-request';
import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { adaptChatMessageTypeAltEnumToUI } from './chat-message-type-alt-enum.adapter';

export function adaptAddChatMessageRequestAltToUI(source?: ApiAddChatMessageRequestAltDto | null): AddChatMessageRequestAlt {
  return {
    chatMessageType: adaptChatMessageTypeAltEnumToUI(source?.ChatMessageType),
    payload: source?.Payload,
  };
}
