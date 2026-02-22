import { ApiTagParticipantRuleDto } from '../../../swagger/models/api-tag-participant-rule-dto';
import { TagParticipantRule } from '../../models/tag-participant-rule.interface';
import { tagParticipantRuleTypeEnumAdapter } from '../enums/tag-participant-rule-type-enum.adapter';

export const tagParticipantRuleAdapter = (source?: ApiTagParticipantRuleDto | null): TagParticipantRule => {
  return {
    id: source?.Id,
    isIncluded: source?.IsIncluded,
    name: source?.Name,
    participantHomeKladrRegionCodes: source?.ParticipantHomeKladrRegionCodes,
    participantIds: source?.ParticipantIds,
    status: source?.Status,
    tagId: source?.TagId,
    type: source?.Type === null ? undefined : tagParticipantRuleTypeEnumAdapter(source?.Type),
  };
}
