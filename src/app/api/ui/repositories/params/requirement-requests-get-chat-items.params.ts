import { ItemIdAmountAlt } from '../../models/item-id-amount-alt.interface';
import { RequirementRequestsGetChatItems$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chat-items';
import { adaptApiItemIdAmountAltDto } from '../../adapters/toDto/api-item-id-amount.adapter';

export interface RequirementRequestsGetChatItemsParams {
  requirementRequestId: number;
  chatId: number;
  body?: ItemIdAmountAlt;
}

export const requirementRequestsGetChatItemsParamsAdapter = {
  adapt(params?: RequirementRequestsGetChatItemsParams): RequirementRequestsGetChatItems$Params {
    if (!params) {
      return {} as RequirementRequestsGetChatItems$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      body: adaptApiItemIdAmountAltDto(params.body),
    };
  }
};
