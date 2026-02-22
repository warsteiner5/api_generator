import { CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competitive-list-item-for-participant-offer-template';

// @ts-ignore
export interface CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams {
  id: number;
}

export function competetiveListGetCompetitiveListItemForParticipantOfferTemplateAdapter(params?: CompetetiveListGetCompetitiveListItemForParticipantOfferTemplateParams): CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params {
  if (!params) {
    return {} as CompetetiveListGetCompetitiveListItemForParticipantOfferTemplate$Params;
  }
  return {
      id: params.id,
  };
}
