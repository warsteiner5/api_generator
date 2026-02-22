import { ApiAddChatMessageRequestAltDto } from '../../../swagger/models/api-add-chat-message-request';
import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { chatMessageTypeAltEnumAdapter } from '../enums/chat-message-type-alt-enum.adapter';

export const addChatMessageRequestAltAdapter = (source?: ApiAddChatMessageRequestAltDto | null): AddChatMessageRequestAlt => {
  return {
    chatMessageType: source?.ChatMessageType === null ? undefined : chatMessageTypeAltEnumAdapter(source?.ChatMessageType),
    payload: source?.Payload,
  };
}
