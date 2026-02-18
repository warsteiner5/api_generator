import { RequirementRequestsDownloadComparisonProtocol$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-download-comparison-protocol';

export interface RequirementRequestsDownloadComparisonProtocolParams {
  id: number;
}

export const requirementRequestsDownloadComparisonProtocolParamsAdapter = {
  adapt(params?: RequirementRequestsDownloadComparisonProtocolParams): RequirementRequestsDownloadComparisonProtocol$Params {
    if (!params) {
      return {} as RequirementRequestsDownloadComparisonProtocol$Params;
    }
    return {
      id: params.id,
    };
  }
};
