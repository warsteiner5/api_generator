import { CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-remove-participant-offer-from-competitive-list-item';

export interface CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams {
  competitiveListId: number;
  priceListId: number;
  requirementRequestId: number;
}

export const competetiveListRemoveParticipantOfferFromCompetitiveListItemParamsAdapter = {
  adapt(params?: CompetetiveListRemoveParticipantOfferFromCompetitiveListItemParams): CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params {
    if (!params) {
      return {} as CompetetiveListRemoveParticipantOfferFromCompetitiveListItem$Params;
    }
    return {
      competitiveListId: params.competitiveListId,
      priceListId: params.priceListId,
      requirementRequestId: params.requirementRequestId,
    };
  }
};
