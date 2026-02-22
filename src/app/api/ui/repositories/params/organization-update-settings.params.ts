import { OrganizationSettings } from '../../models/organization-settings.interface';
import { OrganizationUpdateSettings$Params } from '../../../swagger/fn/organization/organization-update-settings';
import { apiOrganizationSettingsDtoAdapter } from '../../adapters/models/api-organization-settings-dto.adapter';

// @ts-ignore
export interface OrganizationUpdateSettingsParams {
  body?: OrganizationSettings;
}

export function organizationUpdateSettingsAdapter(params?: OrganizationUpdateSettingsParams): OrganizationUpdateSettings$Params {
  if (!params) {
    return {} as OrganizationUpdateSettings$Params;
  }
  return {
      body: apiOrganizationSettingsDtoAdapter(params.body),
  };
}
