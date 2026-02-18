/* tslint:disable */
/* eslint-disable */
import { ApiOrgAccreditationLevelEnum } from '../models/api-org-accreditation-level-enum';
export interface ApiOrgAccreditationLevelDto {
  IsFirstPaymentDone?: boolean;
  IsPhysicalPersonFromRtsPassport?: boolean;
  IsRegisteredWithoutSign?: boolean;
  Level?: ApiOrgAccreditationLevelEnum;
}
