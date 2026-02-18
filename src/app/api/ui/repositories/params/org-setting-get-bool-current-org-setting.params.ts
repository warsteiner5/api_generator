import { OrgSettingGetBoolCurrentOrgSetting$Params } from '../../../swagger/fn/org-setting/org-setting-get-bool-current-org-setting';
import { OrgSettingNameEnum } from '../../enums/org-setting-name.enum';
import { adaptApiOrgSettingNameEnum } from '../../adapters/toDto/api-org-setting-name-enum.adapter';

export interface OrgSettingGetBoolCurrentOrgSettingParams {
  settingName: OrgSettingNameEnum;
}

export const orgSettingGetBoolCurrentOrgSettingParamsAdapter = {
  adapt(params?: OrgSettingGetBoolCurrentOrgSettingParams): OrgSettingGetBoolCurrentOrgSetting$Params {
    if (!params) {
      return {} as OrgSettingGetBoolCurrentOrgSetting$Params;
    }
    return {
      settingName: adaptApiOrgSettingNameEnum(params.settingName),
    };
  }
};
