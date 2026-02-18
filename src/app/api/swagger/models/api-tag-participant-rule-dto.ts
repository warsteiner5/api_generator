/* tslint:disable */
/* eslint-disable */
import { ApiTagParticipantRuleTypeEnum } from '../models/api-tag-participant-rule-type-enum';
export interface ApiTagParticipantRuleDto {
  Id?: number;
  IsIncluded?: boolean;
  Name?: string | null;
  ParticipantHomeKladrRegionCodes?: Array<string> | null;
  ParticipantIds?: Array<number> | null;
  Status?: boolean;
  TagId?: number;
  Type?: ApiTagParticipantRuleTypeEnum;
}
