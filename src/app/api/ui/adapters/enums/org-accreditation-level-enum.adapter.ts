import { ApiOrgAccreditationLevelEnum } from '../../../swagger/models/api-org-accreditation-level-enum';
import { OrgAccreditationLevelEnum } from '../../enums/org-accreditation-level.enum';

export const orgAccreditationLevelEnumAdapter = (source?: ApiOrgAccreditationLevelEnum | null): OrgAccreditationLevelEnum => {
  switch (source) {
    case ApiOrgAccreditationLevelEnum.PhysicalPersonFromRtsPassport:
      return OrgAccreditationLevelEnum.PhysicalPersonFromRtsPassport;
    case ApiOrgAccreditationLevelEnum.RegistrationWithoutVerification:
      return OrgAccreditationLevelEnum.RegistrationWithoutVerification;
    case ApiOrgAccreditationLevelEnum.RegisteredWithoutSign:
      return OrgAccreditationLevelEnum.RegisteredWithoutSign;
    case ApiOrgAccreditationLevelEnum.RegisteredWithSign:
      return OrgAccreditationLevelEnum.RegisteredWithSign;
    default:
      throw new Error(`Enum value is not defined: ApiOrgAccreditationLevelEnum=${String(source)}`);
  }
}
