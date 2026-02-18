import { TagParticipantRule } from '../../models/tag-participant-rule.interface';
import { ApiTagParticipantRuleDto } from '../../../swagger/models/api-tag-participant-rule-dto';
import { adaptApiTagParticipantRuleTypeEnum } from './api-tag-participant-rule-type-enum.adapter';

export function adaptApiTagParticipantRuleDto(source?: TagParticipantRule | null): ApiTagParticipantRuleDto {
  return {
    Id: source?.id,
    IsIncluded: source?.isIncluded,
    Name: source?.name,
    ParticipantHomeKladrRegionCodes: source?.participantHomeKladrRegionCodes ?? [],
    ParticipantIds: source?.participantIds ?? [],
    Status: source?.status,
    TagId: source?.tagId,
    Type: adaptApiTagParticipantRuleTypeEnum(source?.type),
  };
}
