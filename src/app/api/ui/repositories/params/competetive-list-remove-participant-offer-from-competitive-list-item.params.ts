import { CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-remove-participant-offer-from-competitive-list-item';

// @ts-ignore
export interface CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams {
  competitiveListId: number;
  priceListId: number;
  requirementRequestId: number;
}

export function competetiveListRemoveParticipantOfferFromCompetitiveListItemAdapter(params?: CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams): CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params {
  if (!params) {
    return {} as CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params;
  }
  return {
      competitiveListId: params.competitiveListId,
      priceListId: params.priceListId,
      requirementRequestId: params.requirementRequestId,
  };
}
