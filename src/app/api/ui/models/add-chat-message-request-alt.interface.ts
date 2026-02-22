import { ChatMessageTypeAltEnum } from '../enums/chat-message-type-alt.enum';

// @ts-ignore
export interface AddChatMessageRequestAlt {
  chatMessageType: ChatMessageTypeAltEnum;
  payload: any;
}
