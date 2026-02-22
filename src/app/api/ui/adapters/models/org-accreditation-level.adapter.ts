import { ApiOrgAccreditationLevelDto } from '../../../swagger/models/api-org-accreditation-level-dto';
import { OrgAccreditationLevel } from '../../models/org-accreditation-level.interface';
import { orgAccreditationLevelEnumAdapter } from '../enums/org-accreditation-level-enum.adapter';

export const orgAccreditationLevelAdapter = (source?: ApiOrgAccreditationLevelDto | null): OrgAccreditationLevel => {
  return {
    isFirstPaymentDone: source?.IsFirstPaymentDone,
    isPhysicalPersonFromRtsPassport: source?.IsPhysicalPersonFromRtsPassport,
    isRegisteredWithoutSign: source?.IsRegisteredWithoutSign,
    level: source?.Level === null ? undefined : orgAccreditationLevelEnumAdapter(source?.Level),
  };
}
