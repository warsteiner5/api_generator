import { TagsDeleteTagParticipantRule$Params } from '../../../swagger/fn/tags/tags-delete-tag-participant-rule';

export interface TagsDeleteTagParticipantRuleParams {
  id: number;
}

export const tagsDeleteTagParticipantRuleParamsAdapter = {
  adapt(params?: TagsDeleteTagParticipantRuleParams): TagsDeleteTagParticipantRule$Params {
    if (!params) {
      return {} as TagsDeleteTagParticipantRule$Params;
    }
    return {
      id: params.id,
    };
  }
};
