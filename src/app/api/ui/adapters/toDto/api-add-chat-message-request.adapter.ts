import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { ApiAddChatMessageRequestAltDto } from '../../../swagger/models/api-add-chat-message-request';
import { adaptApiChatMessageTypeAltEnum } from './api-chat-message-type.adapter';

export function adaptApiAddChatMessageRequestAltDto(source?: AddChatMessageRequestAlt | null): ApiAddChatMessageRequestAltDto {
  return {
    ChatMessageType: adaptApiChatMessageTypeAltEnum(source?.chatMessageType),
    Payload: source?.payload,
  };
}
