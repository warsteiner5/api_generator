import { TagParticipantOfferRuleTypeEnum } from '../enums/tag-participant-offer-rule-type.enum';

// @ts-ignore
export interface TagParticipantOfferRuleListView {
  id: number;
  name: string;
  status: boolean;
  type: TagParticipantOfferRuleTypeEnum;
}
