import { TagParticipantOfferRuleTypeEnum } from '../enums/tag-participant-offer-rule-type.enum';

// @ts-ignore
export interface TagParticipantRuleListView {
  id: number;
  name: string;
  objects: string[];
  status: boolean;
  type: TagParticipantOfferRuleTypeEnum;
}
