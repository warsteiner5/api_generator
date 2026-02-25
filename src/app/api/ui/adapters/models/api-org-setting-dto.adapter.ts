import { OrgSetting } from '../../models/org-setting.interface';
import { ApiOrgSettingDto } from '../../../swagger/models/api-org-setting-dto';
import { apiEntityDtoOfIntegerAdapter } from './api-entity-dto-of-integer.adapter';
import { apiOrgSettingApplicabilityEnumAdapter } from '../enums/api-org-setting-applicability-enum.adapter';
import { apiOrgSettingNameEnumAdapter } from '../enums/api-org-setting-name-enum.adapter';
import { apiOrgSettingRoleTargetEnumAdapter } from '../enums/api-org-setting-role-target-enum.adapter';
import { apiOrgSettingTypeEnumAdapter } from '../enums/api-org-setting-type-enum.adapter';

export const apiOrgSettingDtoAdapter = (source?: OrgSetting | null): ApiOrgSettingDto => {
  return {
    ...apiEntityDtoOfIntegerAdapter(source as unknown as Parameters<typeof apiEntityDtoOfIntegerAdapter>[0]),
    Value: source?.value,
    OrgSettingType: source?.orgSettingType === null ? undefined : apiOrgSettingTypeEnumAdapter(source?.orgSettingType),
    OrgSettingName: source?.orgSettingName === null ? undefined : apiOrgSettingNameEnumAdapter(source?.orgSettingName),
    OrgSettingApplicability: source?.orgSettingApplicability === null ? undefined : apiOrgSettingApplicabilityEnumAdapter(source?.orgSettingApplicability),
    OrgSettingRoleTarget: source?.orgSettingRoleTarget === null ? undefined : apiOrgSettingRoleTargetEnumAdapter(source?.orgSettingRoleTarget),
    TenantId: source?.tenantId,
  };
}
