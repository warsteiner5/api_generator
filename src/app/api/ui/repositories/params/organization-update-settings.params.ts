import { OrganizationSettings } from '../../models/organization-settings.interface';
import { OrganizationUpdateSettings$Params } from '../../../swagger/fn/organization/organization-update-settings';
import { adaptApiOrganizationSettingsDto } from '../../adapters/toDto/api-organization-settings-dto.adapter';

export interface OrganizationUpdateSettingsParams {
  body?: OrganizationSettings;
}

export const organizationUpdateSettingsParamsAdapter = {
  adapt(params?: OrganizationUpdateSettingsParams): OrganizationUpdateSettings$Params {
    if (!params) {
      return {} as OrganizationUpdateSettings$Params;
    }
    return {
      body: adaptApiOrganizationSettingsDto(params.body),
    };
  }
};
