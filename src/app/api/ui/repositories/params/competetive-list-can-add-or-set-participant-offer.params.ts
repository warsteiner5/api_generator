import { CompetetiveListCanAddOrSetParticipantOffer$Params } from '../../../swagger/fn/competetive-list/competetive-list-can-add-or-set-participant-offer';

export interface CompetetiveListCanAddOrSetParticipantOfferParams {
  competitiveListId: number;
}

export const competetiveListCanAddOrSetParticipantOfferParamsAdapter = {
  adapt(params?: CompetetiveListCanAddOrSetParticipantOfferParams): CompetetiveListCanAddOrSetParticipantOffer$Params {
    if (!params) {
      return {} as CompetetiveListCanAddOrSetParticipantOffer$Params;
    }
    return {
      competitiveListId: params.competitiveListId,
    };
  }
};
