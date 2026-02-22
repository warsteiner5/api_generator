import { CompetetiveListAddParticipantOfferToCompetitiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-add-participant-offer-to-competitive-list-item';

// @ts-ignore
export interface CompetetiveListAddParticipantOfferToCompetitiveListItemParams {
  competitiveListId: number;
  priceListId: number;
  requirementRequestId: number;
}

export function competetiveListAddParticipantOfferToCompetitiveListItemAdapter(params?: CompetetiveListAddParticipantOfferToCompetitiveListItemParams): CompetetiveListAddParticipantOfferToCompetitiveListItem$Params {
  if (!params) {
    return {} as CompetetiveListAddParticipantOfferToCompetitiveListItem$Params;
  }
  return {
      competitiveListId: params.competitiveListId,
      priceListId: params.priceListId,
      requirementRequestId: params.requirementRequestId,
  };
}
