import { TagParticipantRuleTypeEnum } from '../enums/tag-participant-rule-type.enum';

// @ts-ignore
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
