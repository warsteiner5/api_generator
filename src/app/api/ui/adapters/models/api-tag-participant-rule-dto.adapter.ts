import { TagParticipantRule } from '../../models/tag-participant-rule.interface';
import { ApiTagParticipantRuleDto } from '../../../swagger/models/api-tag-participant-rule-dto';
import { apiTagParticipantRuleTypeEnumAdapter } from '../enums/api-tag-participant-rule-type-enum.adapter';

export const apiTagParticipantRuleDtoAdapter = (source?: TagParticipantRule | null): ApiTagParticipantRuleDto => {
  return {
    Id: source?.id,
    IsIncluded: source?.isIncluded,
    Name: source?.name,
    ParticipantHomeKladrRegionCodes: source?.participantHomeKladrRegionCodes,
    ParticipantIds: source?.participantIds,
    Status: source?.status,
    TagId: source?.tagId,
    Type: source?.type === null ? undefined : apiTagParticipantRuleTypeEnumAdapter(source?.type),
  };
}
