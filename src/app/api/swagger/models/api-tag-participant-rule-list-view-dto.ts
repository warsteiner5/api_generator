/* tslint:disable */
/* eslint-disable */
import { ApiTagParticipantOfferRuleTypeEnum } from '../models/api-tag-participant-offer-rule-type-enum';
export interface ApiTagParticipantRuleListViewDto {
  Id?: number;
  Name?: string | null;
  Objects?: Array<string> | null;
  Status?: boolean;
  Type?: ApiTagParticipantOfferRuleTypeEnum;
}
