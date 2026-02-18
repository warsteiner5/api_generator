import { TagParticipantOfferRuleTypeEnum } from '../enums/tag-participant-offer-rule-type.enum';

export interface TagParticipantRuleListView {
  id: number;
  name: string;
  objects: string[];
  status: boolean;
  type: TagParticipantOfferRuleTypeEnum;
}
