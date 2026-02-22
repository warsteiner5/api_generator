import { RequirementRequestsGetRequirementRequestsByOffer$Params } from '../../../swagger/fn/requirement-requests/requirement-requests-get-requirement-requests-by-offer';

// @ts-ignore
export interface RequirementRequestsGetRequirementRequestsByOfferParams {
  participantOfferId: number;
}

export function requirementRequestsGetRequirementRequestsByOfferAdapter(params?: RequirementRequestsGetRequirementRequestsByOfferParams): RequirementRequestsGetRequirementRequestsByOffer$Params {
  if (!params) {
    return {} as RequirementRequestsGetRequirementRequestsByOffer$Params;
  }
  return {
      participantOfferId: params.participantOfferId,
  };
}
