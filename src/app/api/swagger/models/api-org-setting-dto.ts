/* tslint:disable */
/* eslint-disable */
import { ApiEntityDtoOfIntegerAltDto } from '../models/api-entity-dto-of-integer';
import { ApiOrgSettingApplicabilityEnum } from '../models/api-org-setting-applicability-enum';
import { ApiOrgSettingNameEnum } from '../models/api-org-setting-name-enum';
import { ApiOrgSettingRoleTargetEnum } from '../models/api-org-setting-role-target-enum';
import { ApiOrgSettingTypeEnum } from '../models/api-org-setting-type-enum';
export type ApiOrgSettingDto = ApiEntityDtoOfIntegerAltDto & {
'Value'?: string | null;
'OrgSettingType'?: ApiOrgSettingTypeEnum;
'OrgSettingName'?: ApiOrgSettingNameEnum;
'OrgSettingApplicability'?: ApiOrgSettingApplicabilityEnum;
'OrgSettingRoleTarget'?: ApiOrgSettingRoleTargetEnum;
'TenantId'?: number;
};
