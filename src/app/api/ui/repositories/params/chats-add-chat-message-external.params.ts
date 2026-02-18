import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { ChatsAddChatMessageExternal$Params } from '../../../swagger/fn/chats/chats-add-chat-message-external';
import { adaptApiAddChatMessageRequestAltDto } from '../../adapters/toDto/api-add-chat-message-request.adapter';

export interface ChatsAddChatMessageExternalParams {
  chatId: number;
  body?: AddChatMessageRequestAlt;
}

export const chatsAddChatMessageExternalParamsAdapter = {
  adapt(params?: ChatsAddChatMessageExternalParams): ChatsAddChatMessageExternal$Params {
    if (!params) {
      return {} as ChatsAddChatMessageExternal$Params;
    }
    return {
      chatId: params.chatId,
      body: adaptApiAddChatMessageRequestAltDto(params.body),
    };
  }
};
