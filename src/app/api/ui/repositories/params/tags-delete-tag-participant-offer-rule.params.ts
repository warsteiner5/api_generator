import { TagsDeleteTagParticipantOfferRule$Params } from '../../../swagger/fn/tags/tags-delete-tag-participant-offer-rule';

export interface TagsDeleteTagParticipantOfferRuleParams {
  id: number;
}

export const tagsDeleteTagParticipantOfferRuleParamsAdapter = {
  adapt(params?: TagsDeleteTagParticipantOfferRuleParams): TagsDeleteTagParticipantOfferRule$Params {
    if (!params) {
      return {} as TagsDeleteTagParticipantOfferRule$Params;
    }
    return {
      id: params.id,
    };
  }
};
