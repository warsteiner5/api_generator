import { OrgAccreditationLevel } from '../../models/org-accreditation-level.interface';
import { ApiOrgAccreditationLevelDto } from '../../../swagger/models/api-org-accreditation-level-dto';
import { apiOrgAccreditationLevelEnumAdapter } from '../enums/api-org-accreditation-level-enum.adapter';

export const apiOrgAccreditationLevelDtoAdapter = (source?: OrgAccreditationLevel | null): ApiOrgAccreditationLevelDto => {
  return {
    IsFirstPaymentDone: source?.isFirstPaymentDone,
    IsPhysicalPersonFromRtsPassport: source?.isPhysicalPersonFromRtsPassport,
    IsRegisteredWithoutSign: source?.isRegisteredWithoutSign,
    Level: source?.level === null ? undefined : apiOrgAccreditationLevelEnumAdapter(source?.level),
  };
}
