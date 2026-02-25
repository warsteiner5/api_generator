import { ApiOrgSettingDto } from '../../../swagger/models/api-org-setting-dto';
import { OrgSetting } from '../../models/org-setting.interface';
import { entityDtoOfIntegerAdapter } from './entity-dto-of-integer.adapter';
import { orgSettingApplicabilityEnumAdapter } from '../enums/org-setting-applicability-enum.adapter';
import { orgSettingNameEnumAdapter } from '../enums/org-setting-name-enum.adapter';
import { orgSettingRoleTargetEnumAdapter } from '../enums/org-setting-role-target-enum.adapter';
import { orgSettingTypeEnumAdapter } from '../enums/org-setting-type-enum.adapter';

export const orgSettingAdapter = (source?: ApiOrgSettingDto | null): OrgSetting => {
  return {
    ...entityDtoOfIntegerAdapter(source as unknown as Parameters<typeof entityDtoOfIntegerAdapter>[0]),
    value: source?.Value,
    orgSettingType: source?.OrgSettingType === null ? undefined : orgSettingTypeEnumAdapter(source?.OrgSettingType),
    orgSettingName: source?.OrgSettingName === null ? undefined : orgSettingNameEnumAdapter(source?.OrgSettingName),
    orgSettingApplicability: source?.OrgSettingApplicability === null ? undefined : orgSettingApplicabilityEnumAdapter(source?.OrgSettingApplicability),
    orgSettingRoleTarget: source?.OrgSettingRoleTarget === null ? undefined : orgSettingRoleTargetEnumAdapter(source?.OrgSettingRoleTarget),
    tenantId: source?.TenantId,
  };
}
