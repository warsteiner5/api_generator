import { MessageAlt } from '../../models/message-alt.interface';
import { RequirementRequestsAddChatMessage$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-add-chat-message';
import { apiMessageAltDtoAdapter } from '../../adapters/models/api-message.adapter';

// @ts-ignore
export interface RequirementRequestsAddChatMessageParams {
  requirementRequestId: number;
  chatId: number;
  body?: MessageAlt;
}

export function requirementRequestsAddChatMessageAdapter(params?: RequirementRequestsAddChatMessageParams): RequirementRequestsAddChatMessage$Params {
  if (!params) {
    return {} as RequirementRequestsAddChatMessage$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      body: apiMessageAltDtoAdapter(params.body),
  };
}
