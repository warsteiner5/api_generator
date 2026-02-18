import { RequirementRequestsDownloadEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-download-equivalent-table';

export interface RequirementRequestsDownloadEquivalentTableParams {
  id: number;
}

export const requirementRequestsDownloadEquivalentTableParamsAdapter = {
  adapt(params?: RequirementRequestsDownloadEquivalentTableParams): RequirementRequestsDownloadEquivalentTable$Params {
    if (!params) {
      return {} as RequirementRequestsDownloadEquivalentTable$Params;
    }
    return {
      id: params.id,
    };
  }
};
