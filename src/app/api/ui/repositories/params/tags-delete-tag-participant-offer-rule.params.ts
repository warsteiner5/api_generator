import { TagsDeleteTagParticipantOfferRule$Params } from '../../../swagger/fn/tags/tags-delete-tag-participant-offer-rule';

// @ts-ignore
export interface TagsDeleteTagParticipantOfferRuleParams {
  id: number;
}

export function tagsDeleteTagParticipantOfferRuleAdapter(params?: TagsDeleteTagParticipantOfferRuleParams): TagsDeleteTagParticipantOfferRule$Params {
  if (!params) {
    return {} as TagsDeleteTagParticipantOfferRule$Params;
  }
  return {
      id: params.id,
  };
}
