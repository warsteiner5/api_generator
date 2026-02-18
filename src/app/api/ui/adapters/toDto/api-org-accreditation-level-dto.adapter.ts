import { OrgAccreditationLevel } from '../../models/org-accreditation-level.interface';
import { ApiOrgAccreditationLevelDto } from '../../../swagger/models/api-org-accreditation-level-dto';
import { adaptApiOrgAccreditationLevelEnum } from './api-org-accreditation-level-enum.adapter';

export function adaptApiOrgAccreditationLevelDto(source?: OrgAccreditationLevel | null): ApiOrgAccreditationLevelDto {
  return {
    IsFirstPaymentDone: source?.isFirstPaymentDone,
    IsPhysicalPersonFromRtsPassport: source?.isPhysicalPersonFromRtsPassport,
    IsRegisteredWithoutSign: source?.isRegisteredWithoutSign,
    Level: adaptApiOrgAccreditationLevelEnum(source?.level),
  };
}
