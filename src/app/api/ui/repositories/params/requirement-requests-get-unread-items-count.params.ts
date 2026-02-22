import { RequirementRequestsGetUnreadItemsCount$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-unread-items-count';

// @ts-ignore
export interface RequirementRequestsGetUnreadItemsCountParams {
  requirementRequestId: number;
  chatId: number;
}

export function requirementRequestsGetUnreadItemsCountAdapter(params?: RequirementRequestsGetUnreadItemsCountParams): RequirementRequestsGetUnreadItemsCount$Params {
  if (!params) {
    return {} as RequirementRequestsGetUnreadItemsCount$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
      chatId: params.chatId,
  };
}
