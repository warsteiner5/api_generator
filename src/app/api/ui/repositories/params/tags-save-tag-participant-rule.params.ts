import { TagParticipantRule } from '../../models/tag-participant-rule.interface';
import { TagsSaveTagParticipantRule$Params } from '../../../swagger/fn/tags/tags-save-tag-participant-rule';
import { apiTagParticipantRuleDtoAdapter } from '../../adapters/models/api-tag-participant-rule-dto.adapter';

// @ts-ignore
export interface TagsSaveTagParticipantRuleParams {
  body?: TagParticipantRule;
}

export function tagsSaveTagParticipantRuleAdapter(params?: TagsSaveTagParticipantRuleParams): TagsSaveTagParticipantRule$Params {
  if (!params) {
    return {} as TagsSaveTagParticipantRule$Params;
  }
  return {
      body: apiTagParticipantRuleDtoAdapter(params.body),
  };
}
