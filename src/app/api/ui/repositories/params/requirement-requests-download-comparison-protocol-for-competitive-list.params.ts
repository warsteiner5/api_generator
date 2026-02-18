import { RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-download-comparison-protocol-for-competitive-list';

export interface RequirementRequestsDownloadComparisonProtocolForCompetitiveListParams {
  id: number;
  competitiveListId: number;
}

export const requirementRequestsDownloadComparisonProtocolForCompetitiveListParamsAdapter = {
  adapt(params?: RequirementRequestsDownloadComparisonProtocolForCompetitiveListParams): RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params {
    if (!params) {
      return {} as RequirementRequestsDownloadComparisonProtocolForCompetitiveList$Params;
    }
    return {
      id: params.id,
      competitiveListId: params.competitiveListId,
    };
  }
};
