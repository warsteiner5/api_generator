import { RequirementRequestsDownloadEquivalentTable$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-download-equivalent-table';

// @ts-ignore
export interface RequirementRequestsDownloadEquivalentTableParams {
  id: number;
}

export function requirementRequestsDownloadEquivalentTableAdapter(params?: RequirementRequestsDownloadEquivalentTableParams): RequirementRequestsDownloadEquivalentTable$Params {
  if (!params) {
    return {} as RequirementRequestsDownloadEquivalentTable$Params;
  }
  return {
      id: params.id,
  };
}
