import { RequirementRequestsGetUnreadItems$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-unread-items';

export interface RequirementRequestsGetUnreadItemsParams {
  requirementRequestId: number;
  chatId: number;
}

export const requirementRequestsGetUnreadItemsParamsAdapter = {
  adapt(params?: RequirementRequestsGetUnreadItemsParams): RequirementRequestsGetUnreadItems$Params {
    if (!params) {
      return {} as RequirementRequestsGetUnreadItems$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
    };
  }
};
