import { TagParticipantOfferRuleTypeEnum } from '../enums/tag-participant-offer-rule-type.enum';

// @ts-ignore
export interface TagParticipantOfferRule {
  categoryIds: string[];
  id: number;
  isIncluded: boolean;
  name: string;
  okpd2Codes: string[];
  participantHomeKladrRegionCodes: string[];
  participantIds: number[];
  participantOfferIds: number[];
  status: boolean;
  tagId: number;
  tenantIds: number[];
  type: TagParticipantOfferRuleTypeEnum;
}
