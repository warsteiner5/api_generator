import { ApiOrgSettingApplicabilityEnum } from '../../../swagger/models/api-org-setting-applicability-enum';
import { OrgSettingApplicabilityEnum } from '../../enums/org-setting-applicability.enum';

export const orgSettingApplicabilityEnumAdapter = (source?: ApiOrgSettingApplicabilityEnum | null): OrgSettingApplicabilityEnum => {
  switch (source) {
    case ApiOrgSettingApplicabilityEnum.None:
      return OrgSettingApplicabilityEnum.None;
    case ApiOrgSettingApplicabilityEnum.Always:
      return OrgSettingApplicabilityEnum.Always;
    case ApiOrgSettingApplicabilityEnum.Never:
      return OrgSettingApplicabilityEnum.Never;
    case ApiOrgSettingApplicabilityEnum.WithCondition:
      return OrgSettingApplicabilityEnum.WithCondition;
    default:
      throw new Error(`Enum value is not defined: ApiOrgSettingApplicabilityEnum=${String(source)}`);
  }
}
