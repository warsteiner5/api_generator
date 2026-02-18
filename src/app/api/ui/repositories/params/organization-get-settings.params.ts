import { OrganizationGetSettings$Params } from '../../../swagger/fn/organization/organization-get-settings';

export interface OrganizationGetSettingsParams {
}

export const organizationGetSettingsParamsAdapter = {
  adapt(params?: OrganizationGetSettingsParams): OrganizationGetSettings$Params {
    if (!params) {
      return {} as OrganizationGetSettings$Params;
    }
    return {
    };
  }
};
