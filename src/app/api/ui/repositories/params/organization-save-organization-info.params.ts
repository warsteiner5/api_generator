import { OrganizationSaveOrganizationInfo$Params } from '../../../swagger/fn/organization/organization-save-organization-info';
import { OrganizationSettings } from '../../models/organization-settings.interface';
import { apiOrganizationSettingsDtoAdapter } from '../../adapters/models/api-organization-settings-dto.adapter';

// @ts-ignore
export interface OrganizationSaveOrganizationInfoParams {
  body?: OrganizationSettings;
}

export function organizationSaveOrganizationInfoAdapter(params?: OrganizationSaveOrganizationInfoParams): OrganizationSaveOrganizationInfo$Params {
  if (!params) {
    return {} as OrganizationSaveOrganizationInfo$Params;
  }
  return {
      body: apiOrganizationSettingsDtoAdapter(params.body),
  };
}
