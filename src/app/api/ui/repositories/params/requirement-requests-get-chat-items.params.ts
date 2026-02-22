import { ItemIdAmountAlt } from '../../models/item-id-amount-alt.interface';
import { RequirementRequestsGetChatItems$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chat-items';
import { apiItemIdAmountAltDtoAdapter } from '../../adapters/models/api-item-id-amount.adapter';

// @ts-ignore
export interface RequirementRequestsGetChatItemsParams {
  requirementRequestId: number;
  chatId: number;
  body?: ItemIdAmountAlt;
}

export function requirementRequestsGetChatItemsAdapter(params?: RequirementRequestsGetChatItemsParams): RequirementRequestsGetChatItems$Params {
  if (!params) {
    return {} as RequirementRequestsGetChatItems$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
      body: apiItemIdAmountAltDtoAdapter(params.body),
  };
}
