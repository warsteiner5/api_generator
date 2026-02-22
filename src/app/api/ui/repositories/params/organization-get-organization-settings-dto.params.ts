import { OrganizationGetOrganizationSettingsDto$Params } from '../../../swagger/fn/organization/organization-get-organization-settings-dto';

// @ts-ignore
export interface OrganizationGetOrganizationSettingsDtoParams {
  id: number;
}

export function organizationGetOrganizationSettingsDtoAdapter(params?: OrganizationGetOrganizationSettingsDtoParams): OrganizationGetOrganizationSettingsDto$Params {
  if (!params) {
    return {} as OrganizationGetOrganizationSettingsDto$Params;
  }
  return {
      id: params.id,
  };
}
