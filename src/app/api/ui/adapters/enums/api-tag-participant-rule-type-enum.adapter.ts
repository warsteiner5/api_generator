import { TagParticipantRuleTypeEnum } from '../../enums/tag-participant-rule-type.enum';
import { ApiTagParticipantRuleTypeEnum } from '../../../swagger/models/api-tag-participant-rule-type-enum';

export const apiTagParticipantRuleTypeEnumAdapter = (source?: TagParticipantRuleTypeEnum | null): ApiTagParticipantRuleTypeEnum => {
  switch (source) {
    case TagParticipantRuleTypeEnum.ParticipantId:
      return ApiTagParticipantRuleTypeEnum.ParticipantId;
    case TagParticipantRuleTypeEnum.ParticipantHomeRegion:
      return ApiTagParticipantRuleTypeEnum.ParticipantHomeRegion;
    default:
      throw new Error(`Enum value is not defined: TagParticipantRuleTypeEnum=${String(source)}`);
  }
}
