import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { ChatsAddChatMessageExternal$Params } from '../../../swagger/fn/chats/chats-add-chat-message-external';
import { apiAddChatMessageRequestAltDtoAdapter } from '../../adapters/models/api-add-chat-message-request.adapter';

// @ts-ignore
export interface ChatsAddChatMessageExternalParams {
  chatId: number;
  body?: AddChatMessageRequestAlt;
}

export function chatsAddChatMessageExternalAdapter(params?: ChatsAddChatMessageExternalParams): ChatsAddChatMessageExternal$Params {
  if (!params) {
    return {} as ChatsAddChatMessageExternal$Params;
  }
  return {
      chatId: params.chatId,
      body: apiAddChatMessageRequestAltDtoAdapter(params.body),
  };
}
