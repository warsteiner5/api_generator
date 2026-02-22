import { OrgSettingGetBoolCurrentOrgSetting$Params } from '../../../swagger/fn/org-setting/org-setting-get-bool-current-org-setting';
import { OrgSettingNameEnum } from '../../enums/org-setting-name.enum';
import { apiOrgSettingNameEnumAdapter } from '../../adapters/enums/api-org-setting-name-enum.adapter';

// @ts-ignore
export interface OrgSettingGetBoolCurrentOrgSettingParams {
  settingName: OrgSettingNameEnum;
}

export function orgSettingGetBoolCurrentOrgSettingAdapter(params?: OrgSettingGetBoolCurrentOrgSettingParams): OrgSettingGetBoolCurrentOrgSetting$Params {
  if (!params) {
    return {} as OrgSettingGetBoolCurrentOrgSetting$Params;
  }
  return {
      settingName: apiOrgSettingNameEnumAdapter(params.settingName),
  };
}
