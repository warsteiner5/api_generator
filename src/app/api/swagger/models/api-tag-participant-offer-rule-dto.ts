/* tslint:disable */
/* eslint-disable */
import { ApiTagParticipantOfferRuleTypeEnum } from '../models/api-tag-participant-offer-rule-type-enum';
export interface ApiTagParticipantOfferRuleDto {
  CategoryIds?: Array<string> | null;
  Id?: number;
  IsIncluded?: boolean;
  Name?: string | null;
  Okpd2Codes?: Array<string> | null;
  ParticipantHomeKladrRegionCodes?: Array<string> | null;
  ParticipantIds?: Array<number> | null;
  ParticipantOfferIds?: Array<number> | null;
  Status?: boolean;
  TagId?: number;
  TenantIds?: Array<number> | null;
  Type?: ApiTagParticipantOfferRuleTypeEnum;
}
