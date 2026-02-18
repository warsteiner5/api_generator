import { OrganizationSaveOrganizationInfo$Params } from '../../../swagger/fn/organization/organization-save-organization-info';
import { OrganizationSettings } from '../../models/organization-settings.interface';
import { adaptApiOrganizationSettingsDto } from '../../adapters/toDto/api-organization-settings-dto.adapter';

export interface OrganizationSaveOrganizationInfoParams {
  body?: OrganizationSettings;
}

export const organizationSaveOrganizationInfoParamsAdapter = {
  adapt(params?: OrganizationSaveOrganizationInfoParams): OrganizationSaveOrganizationInfo$Params {
    if (!params) {
      return {} as OrganizationSaveOrganizationInfo$Params;
    }
    return {
      body: adaptApiOrganizationSettingsDto(params.body),
    };
  }
};
