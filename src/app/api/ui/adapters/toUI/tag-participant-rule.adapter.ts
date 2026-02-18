import { ApiTagParticipantRuleDto } from '../../../swagger/models/api-tag-participant-rule-dto';
import { TagParticipantRule } from '../../models/tag-participant-rule.interface';
import { adaptTagParticipantRuleTypeEnumToUI } from './tag-participant-rule-type-enum.adapter';

export function adaptTagParticipantRuleToUI(source?: ApiTagParticipantRuleDto | null): TagParticipantRule {
  return {
    id: source?.Id ?? 0,
    isIncluded: source?.IsIncluded ?? false,
    name: source?.Name ?? '',
    participantHomeKladrRegionCodes: source?.ParticipantHomeKladrRegionCodes ?? [],
    participantIds: source?.ParticipantIds ?? [],
    status: source?.Status ?? false,
    tagId: source?.TagId ?? 0,
    type: adaptTagParticipantRuleTypeEnumToUI(source?.Type),
  };
}
