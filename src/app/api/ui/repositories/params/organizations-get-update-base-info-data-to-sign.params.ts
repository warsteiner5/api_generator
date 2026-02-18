import { OrganizationsGetUpdateBaseInfoDataToSign$Params } from '../../../swagger/fn/organizations/organizations-get-update-base-info-data-to-sign';
import { UpdateOrganizationBaseInfoRequestAlt } from '../../models/update-organization-base-info-request-alt.interface';
import { adaptApiUpdateOrganizationBaseInfoRequestAltDto } from '../../adapters/toDto/api-update-organization-base-info-request.adapter';

export interface OrganizationsGetUpdateBaseInfoDataToSignParams {
  body?: UpdateOrganizationBaseInfoRequestAlt;
}

export const organizationsGetUpdateBaseInfoDataToSignParamsAdapter = {
  adapt(params?: OrganizationsGetUpdateBaseInfoDataToSignParams): OrganizationsGetUpdateBaseInfoDataToSign$Params {
    if (!params) {
      return {} as OrganizationsGetUpdateBaseInfoDataToSign$Params;
    }
    return {
      body: adaptApiUpdateOrganizationBaseInfoRequestAltDto(params.body),
    };
  }
};
