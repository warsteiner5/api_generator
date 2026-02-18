/* tslint:disable */
/* eslint-disable */
import { ApiTagObjectEnum } from '../models/api-tag-object-enum';
import { ApiTagParticipantOfferRuleListViewDto } from '../models/api-tag-participant-offer-rule-list-view-dto';
import { ApiTagParticipantRuleListViewDto } from '../models/api-tag-participant-rule-list-view-dto';
export interface ApiTagOperatorViewDto {
  Code?: string | null;
  Description?: string | null;
  FilterText?: string | null;
  Hideable?: boolean;
  HintText?: string | null;
  Id?: number;
  ImageGuid?: string;
  IsActive?: boolean;
  IsEnabledByDefault?: boolean;
  IsTenantsIncluded?: boolean;
  Name?: string | null;
  TagObject?: ApiTagObjectEnum;
  TagParticipantOfferRules?: Array<ApiTagParticipantOfferRuleListViewDto> | null;
  TagParticipantRules?: Array<ApiTagParticipantRuleListViewDto> | null;
}
