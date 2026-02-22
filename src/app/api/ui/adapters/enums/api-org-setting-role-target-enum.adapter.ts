import { OrgSettingRoleTargetEnum } from '../../enums/org-setting-role-target.enum';
import { ApiOrgSettingRoleTargetEnum } from '../../../swagger/models/api-org-setting-role-target-enum';

export const apiOrgSettingRoleTargetEnumAdapter = (source?: OrgSettingRoleTargetEnum | null): ApiOrgSettingRoleTargetEnum => {
  switch (source) {
    case OrgSettingRoleTargetEnum.None:
      return ApiOrgSettingRoleTargetEnum.None;
    case OrgSettingRoleTargetEnum.Customer:
      return ApiOrgSettingRoleTargetEnum.Customer;
    case OrgSettingRoleTargetEnum.Participant:
      return ApiOrgSettingRoleTargetEnum.Participant;
    case OrgSettingRoleTargetEnum.Tenant:
      return ApiOrgSettingRoleTargetEnum.Tenant;
    default:
      throw new Error(`Enum value is not defined: OrgSettingRoleTargetEnum=${String(source)}`);
  }
}
