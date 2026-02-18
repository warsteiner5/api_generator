import { CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competitive-list-item-for-participant-offer-template';

export interface CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams {
  id: number;
}

export const competetiveListGetCompetitiveListItemForParticipantOfferTemplateParamsAdapter = {
  adapt(params?: CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams): CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params {
    if (!params) {
      return {} as CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params;
    }
    return {
      id: params.id,
    };
  }
};
