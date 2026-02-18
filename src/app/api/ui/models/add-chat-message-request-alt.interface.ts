import { ChatMessageTypeAltEnum } from '../enums/chat-message-type-alt.enum';

export interface AddChatMessageRequestAlt {
  chatMessageType: ChatMessageTypeAltEnum;
  payload: any;
}
