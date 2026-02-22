import { ApiTagParticipantRuleTypeEnum } from '../../../swagger/models/api-tag-participant-rule-type-enum';
import { TagParticipantRuleTypeEnum } from '../../enums/tag-participant-rule-type.enum';

export const tagParticipantRuleTypeEnumAdapter = (source?: ApiTagParticipantRuleTypeEnum | null): TagParticipantRuleTypeEnum => {
  switch (source) {
    case ApiTagParticipantRuleTypeEnum.ParticipantId:
      return TagParticipantRuleTypeEnum.ParticipantId;
    case ApiTagParticipantRuleTypeEnum.ParticipantHomeRegion:
      return TagParticipantRuleTypeEnum.ParticipantHomeRegion;
    default:
      throw new Error(`Enum value is not defined: ApiTagParticipantRuleTypeEnum=${String(source)}`);
  }
}
