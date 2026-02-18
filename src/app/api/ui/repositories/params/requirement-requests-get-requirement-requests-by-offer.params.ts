import { RequirementRequestsGetRequirementRequestsByOffer$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-requirement-requests-by-offer';

export interface RequirementRequestsGetRequirementRequestsByOfferParams {
  participantOfferId: number;
}

export const requirementRequestsGetRequirementRequestsByOfferParamsAdapter = {
  adapt(params?: RequirementRequestsGetRequirementRequestsByOfferParams): RequirementRequestsGetRequirementRequestsByOffer$Params {
    if (!params) {
      return {} as RequirementRequestsGetRequirementRequestsByOffer$Params;
    }
    return {
      participantOfferId: params.participantOfferId,
    };
  }
};
