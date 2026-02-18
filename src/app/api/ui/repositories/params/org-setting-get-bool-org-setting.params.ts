import { OrgSettingGetBoolOrgSetting$Params } from '../../../swagger/fn/org-setting/org-setting-get-bool-org-setting';
import { OrgSettingNameEnum } from '../../enums/org-setting-name.enum';
import { adaptApiOrgSettingNameEnum } from '../../adapters/toDto/api-org-setting-name-enum.adapter';

export interface OrgSettingGetBoolOrgSettingParams {
  organizationId: number;
  settingName: OrgSettingNameEnum;
}

export const orgSettingGetBoolOrgSettingParamsAdapter = {
  adapt(params?: OrgSettingGetBoolOrgSettingParams): OrgSettingGetBoolOrgSetting$Params {
    if (!params) {
      return {} as OrgSettingGetBoolOrgSetting$Params;
    }
    return {
      organizationId: params.organizationId,
      settingName: adaptApiOrgSettingNameEnum(params.settingName),
    };
  }
};
