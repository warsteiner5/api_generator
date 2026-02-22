import { OrgSettingGetBoolOrgSetting$Params } from '../../../swagger/fn/org-setting/org-setting-get-bool-org-setting';
import { OrgSettingNameEnum } from '../../enums/org-setting-name.enum';
import { apiOrgSettingNameEnumAdapter } from '../../adapters/enums/api-org-setting-name-enum.adapter';

// @ts-ignore
export interface OrgSettingGetBoolOrgSettingParams {
  organizationId: number;
  settingName: OrgSettingNameEnum;
}

export function orgSettingGetBoolOrgSettingAdapter(params?: OrgSettingGetBoolOrgSettingParams): OrgSettingGetBoolOrgSetting$Params {
  if (!params) {
    return {} as OrgSettingGetBoolOrgSetting$Params;
  }
  return {
      organizationId: params.organizationId,
      settingName: apiOrgSettingNameEnumAdapter(params.settingName),
  };
}
