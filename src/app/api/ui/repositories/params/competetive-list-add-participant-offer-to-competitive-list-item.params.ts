import { CompetetiveListAddParticipantOfferToCompetitiveListItem$Params } from '../../../swagger/fn/competetive-list/competetive-list-add-participant-offer-to-competitive-list-item';

export interface CompetetiveListAddParticipantOfferToCompetitiveListItemParams {
  competitiveListId: number;
  priceListId: number;
  requirementRequestId: number;
}

export const competetiveListAddParticipantOfferToCompetitiveListItemParamsAdapter = {
  adapt(params?: CompetetiveListAddParticipantOfferToCompetitiveListItemParams): CompetetiveListAddParticipantOfferToCompetitiveListItem$Params {
    if (!params) {
      return {} as CompetetiveListAddParticipantOfferToCompetitiveListItem$Params;
    }
    return {
      competitiveListId: params.competitiveListId,
      priceListId: params.priceListId,
      requirementRequestId: params.requirementRequestId,
    };
  }
};
