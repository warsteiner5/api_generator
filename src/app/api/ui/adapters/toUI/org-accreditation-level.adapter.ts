import { ApiOrgAccreditationLevelDto } from '../../../swagger/models/api-org-accreditation-level-dto';
import { OrgAccreditationLevel } from '../../models/org-accreditation-level.interface';
import { adaptOrgAccreditationLevelEnumToUI } from './org-accreditation-level-enum.adapter';

export function adaptOrgAccreditationLevelToUI(source?: ApiOrgAccreditationLevelDto | null): OrgAccreditationLevel {
  return {
    isFirstPaymentDone: source?.IsFirstPaymentDone ?? false,
    isPhysicalPersonFromRtsPassport: source?.IsPhysicalPersonFromRtsPassport ?? false,
    isRegisteredWithoutSign: source?.IsRegisteredWithoutSign ?? false,
    level: adaptOrgAccreditationLevelEnumToUI(source?.Level),
  };
}
