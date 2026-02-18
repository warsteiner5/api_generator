import { MessageAlt } from '../../models/message-alt.interface';
import { RequirementRequestsAddChatMessage$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-add-chat-message';
import { adaptApiMessageAltDto } from '../../adapters/toDto/api-message.adapter';

export interface RequirementRequestsAddChatMessageParams {
  requirementRequestId: number;
  chatId: number;
  body?: MessageAlt;
}

export const requirementRequestsAddChatMessageParamsAdapter = {
  adapt(params?: RequirementRequestsAddChatMessageParams): RequirementRequestsAddChatMessage$Params {
    if (!params) {
      return {} as RequirementRequestsAddChatMessage$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      body: adaptApiMessageAltDto(params.body),
    };
  }
};
