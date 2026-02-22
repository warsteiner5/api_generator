import { RequirementRequestsGetChats$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chats';

// @ts-ignore
export interface RequirementRequestsGetChatsParams {
  requirementRequestId: number;
}

export function requirementRequestsGetChatsAdapter(params?: RequirementRequestsGetChatsParams): RequirementRequestsGetChats$Params {
  if (!params) {
    return {} as RequirementRequestsGetChats$Params;
  }
  return {
      requirementRequestId: params.requirementRequestId,
  };
}
