import { OrganizationGetOrganizationSettingsDto$Params } from '../../../swagger/fn/organization/organization-get-organization-settings-dto';

export interface OrganizationGetOrganizationSettingsDtoParams {
  id: number;
}

export const organizationGetOrganizationSettingsDtoParamsAdapter = {
  adapt(params?: OrganizationGetOrganizationSettingsDtoParams): OrganizationGetOrganizationSettingsDto$Params {
    if (!params) {
      return {} as OrganizationGetOrganizationSettingsDto$Params;
    }
    return {
      id: params.id,
    };
  }
};
