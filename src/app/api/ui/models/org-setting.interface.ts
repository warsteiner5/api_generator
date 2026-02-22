import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';
import { OrgSettingApplicabilityEnum } from '../enums/org-setting-applicability.enum';
import { OrgSettingNameEnum } from '../enums/org-setting-name.enum';
import { OrgSettingRoleTargetEnum } from '../enums/org-setting-role-target.enum';
import { OrgSettingTypeEnum } from '../enums/org-setting-type.enum';

// @ts-ignore
export interface OrgSetting extends EntityDtoOfInteger {
  value: string;
  orgSettingType: OrgSettingTypeEnum;
  orgSettingName: OrgSettingNameEnum;
  orgSettingApplicability: OrgSettingApplicabilityEnum;
  orgSettingRoleTarget: OrgSettingRoleTargetEnum;
  tenantId: number;
}
