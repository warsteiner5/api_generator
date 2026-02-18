import { RequirementRequestsGetChats$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-chats';

export interface RequirementRequestsGetChatsParams {
  requirementRequestId: number;
}

export const requirementRequestsGetChatsParamsAdapter = {
  adapt(params?: RequirementRequestsGetChatsParams): RequirementRequestsGetChats$Params {
    if (!params) {
      return {} as RequirementRequestsGetChats$Params;
    }
    return {
      requirementRequestId: params.requirementRequestId,
    };
  }
};
