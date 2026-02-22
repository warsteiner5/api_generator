import { RequirementRequestsDownloadComparisonProtocol$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-download-comparison-protocol';

// @ts-ignore
export interface RequirementRequestsDownloadComparisonProtocolParams {
  id: number;
}

export function requirementRequestsDownloadComparisonProtocolAdapter(params?: RequirementRequestsDownloadComparisonProtocolParams): RequirementRequestsDownloadComparisonProtocol$Params {
  if (!params) {
    return {} as RequirementRequestsDownloadComparisonProtocol$Params;
  }
  return {
      id: params.id,
  };
}
