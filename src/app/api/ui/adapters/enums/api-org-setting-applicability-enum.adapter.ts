import { OrgSettingApplicabilityEnum } from '../../enums/org-setting-applicability.enum';
import { ApiOrgSettingApplicabilityEnum } from '../../../swagger/models/api-org-setting-applicability-enum';

export const apiOrgSettingApplicabilityEnumAdapter = (source?: OrgSettingApplicabilityEnum | null): ApiOrgSettingApplicabilityEnum => {
  switch (source) {
    case OrgSettingApplicabilityEnum.None:
      return ApiOrgSettingApplicabilityEnum.None;
    case OrgSettingApplicabilityEnum.Always:
      return ApiOrgSettingApplicabilityEnum.Always;
    case OrgSettingApplicabilityEnum.Never:
      return ApiOrgSettingApplicabilityEnum.Never;
    case OrgSettingApplicabilityEnum.WithCondition:
      return ApiOrgSettingApplicabilityEnum.WithCondition;
    default:
      throw new Error(`Enum value is not defined: OrgSettingApplicabilityEnum=${String(source)}`);
  }
}
