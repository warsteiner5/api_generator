import { OrgAccreditationLevelEnum } from '../../enums/org-accreditation-level.enum';
import { ApiOrgAccreditationLevelEnum } from '../../../swagger/models/api-org-accreditation-level-enum';

export function adaptApiOrgAccreditationLevelEnum(source?: OrgAccreditationLevelEnum | null): ApiOrgAccreditationLevelEnum {
  switch (source) {
    case OrgAccreditationLevelEnum.PhysicalPersonFromRtsPassport:
      return ApiOrgAccreditationLevelEnum.PhysicalPersonFromRtsPassport;
    case OrgAccreditationLevelEnum.RegistrationWithoutVerification:
      return ApiOrgAccreditationLevelEnum.RegistrationWithoutVerification;
    case OrgAccreditationLevelEnum.RegisteredWithoutSign:
      return ApiOrgAccreditationLevelEnum.RegisteredWithoutSign;
    case OrgAccreditationLevelEnum.RegisteredWithSign:
      return ApiOrgAccreditationLevelEnum.RegisteredWithSign;
    default:
      throw new Error(`Enum value is not defined: OrgAccreditationLevelEnum=${String(source)}`);
  }
}
