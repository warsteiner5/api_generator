import { CompetetiveListCanAddOrSetParticipantOffer$Params } from '../../../swagger/fn/competetive-list/competetive-list-can-add-or-set-participant-offer';

// @ts-ignore
export interface CompetetiveListCanAddOrSetParticipantOfferParams {
  competitiveListId: number;
}

export function competetiveListCanAddOrSetParticipantOfferAdapter(params?: CompetetiveListCanAddOrSetParticipantOfferParams): CompetetiveListCanAddOrSetParticipantOffer$Params {
  if (!params) {
    return {} as CompetetiveListCanAddOrSetParticipantOffer$Params;
  }
  return {
      competitiveListId: params.competitiveListId,
  };
}
