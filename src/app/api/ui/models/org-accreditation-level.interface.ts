import { OrgAccreditationLevelEnum } from '../enums/org-accreditation-level.enum';

// @ts-ignore
export interface OrgAccreditationLevel {
  isFirstPaymentDone: boolean;
  isPhysicalPersonFromRtsPassport: boolean;
  isRegisteredWithoutSign: boolean;
  level: OrgAccreditationLevelEnum;
}
