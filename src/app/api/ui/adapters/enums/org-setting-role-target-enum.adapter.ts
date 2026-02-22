import { ApiOrgSettingRoleTargetEnum } from '../../../swagger/models/api-org-setting-role-target-enum';
import { OrgSettingRoleTargetEnum } from '../../enums/org-setting-role-target.enum';

export const orgSettingRoleTargetEnumAdapter = (source?: ApiOrgSettingRoleTargetEnum | null): OrgSettingRoleTargetEnum => {
  switch (source) {
    case ApiOrgSettingRoleTargetEnum.None:
      return OrgSettingRoleTargetEnum.None;
    case ApiOrgSettingRoleTargetEnum.Customer:
      return OrgSettingRoleTargetEnum.Customer;
    case ApiOrgSettingRoleTargetEnum.Participant:
      return OrgSettingRoleTargetEnum.Participant;
    case ApiOrgSettingRoleTargetEnum.Tenant:
      return OrgSettingRoleTargetEnum.Tenant;
    default:
      throw new Error(`Enum value is not defined: ApiOrgSettingRoleTargetEnum=${String(source)}`);
  }
}
