import { TagsDeleteTagParticipantRule$Params } from '../../../swagger/fn/tags/tags-delete-tag-participant-rule';

// @ts-ignore
export interface TagsDeleteTagParticipantRuleParams {
  id: number;
}

export function tagsDeleteTagParticipantRuleAdapter(params?: TagsDeleteTagParticipantRuleParams): TagsDeleteTagParticipantRule$Params {
  if (!params) {
    return {} as TagsDeleteTagParticipantRule$Params;
  }
  return {
      id: params.id,
  };
}
