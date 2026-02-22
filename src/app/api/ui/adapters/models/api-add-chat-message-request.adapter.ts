import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { ApiAddChatMessageRequestAltDto } from '../../../swagger/models/api-add-chat-message-request';
import { apiChatMessageTypeAltEnumAdapter } from '../enums/api-chat-message-type.adapter';

export const apiAddChatMessageRequestAltDtoAdapter = (source?: AddChatMessageRequestAlt | null): ApiAddChatMessageRequestAltDto => {
  return {
    ChatMessageType: source?.chatMessageType === null ? undefined : apiChatMessageTypeAltEnumAdapter(source?.chatMessageType),
    Payload: source?.payload,
  };
}
