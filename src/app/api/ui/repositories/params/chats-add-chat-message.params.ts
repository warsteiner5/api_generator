import { AddChatMessageRequestAlt } from '../../models/add-chat-message-request-alt.interface';
import { ChatsAddChatMessage$Params } from '../../../swagger/fn/chats/chats-add-chat-message';
import { adaptApiAddChatMessageRequestAltDto } from '../../adapters/toDto/api-add-chat-message-request.adapter';

export interface ChatsAddChatMessageParams {
  chatId: number;
  body?: AddChatMessageRequestAlt;
}

export const chatsAddChatMessageParamsAdapter = {
  adapt(params?: ChatsAddChatMessageParams): ChatsAddChatMessage$Params {
    if (!params) {
      return {} as ChatsAddChatMessage$Params;
    }
    return {
      chatId: params.chatId,
      body: adaptApiAddChatMessageRequestAltDto(params.body),
    };
  }
};
