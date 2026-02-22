import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { ChatsAddChatMessage$Params } from '../../../swagger/fn/chats/chats-add-chat-message';
import { apiAddChatMessageRequestAltDtoAdapter } from '../../adapters/models/api-add-chat-message-request.adapter';

// @ts-ignore
export interface ChatsAddChatMessageParams {
  chatId: number;
  body?: AddChatMessageRequestAlt;
}

export function chatsAddChatMessageAdapter(params?: ChatsAddChatMessageParams): ChatsAddChatMessage$Params {
  if (!params) {
    return {} as ChatsAddChatMessage$Params;
  }
  return {
      chatId: params.chatId,
      body: apiAddChatMessageRequestAltDtoAdapter(params.body),
  };
}
