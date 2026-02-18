import { TagParticipantRule } from '../../models/tag-participant-rule.interface';
import { TagsSaveTagParticipantRule$Params } from '../../../swagger/fn/tags/tags-save-tag-participant-rule';
import { adaptApiTagParticipantRuleDto } from '../../adapters/toDto/api-tag-participant-rule-dto.adapter';

export interface TagsSaveTagParticipantRuleParams {
  body?: TagParticipantRule;
}

export const tagsSaveTagParticipantRuleParamsAdapter = {
  adapt(params?: TagsSaveTagParticipantRuleParams): TagsSaveTagParticipantRule$Params {
    if (!params) {
      return {} as TagsSaveTagParticipantRule$Params;
    }
    return {
      body: adaptApiTagParticipantRuleDto(params.body),
    };
  }
};
