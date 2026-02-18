import { TagParticipantRuleTypeEnum } from '../enums/tag-participant-rule-type.enum';

export interface TagParticipantRule {
  id: number;
  isIncluded: boolean;
  name: string;
  participantHomeKladrRegionCodes: string[];
  participantIds: number[];
  status: boolean;
  tagId: number;
  type: TagParticipantRuleTypeEnum;
}
