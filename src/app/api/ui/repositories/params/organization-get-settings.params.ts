import { OrganizationGetSettings$Params } from '../../../swagger/fn/organization/organization-get-settings';

// @ts-ignore
export interface OrganizationGetSettingsParams {
}

export function organizationGetSettingsAdapter(params?: OrganizationGetSettingsParams): OrganizationGetSettings$Params {
  if (!params) {
    return {} as OrganizationGetSettings$Params;
  }
  return {
  };
}
