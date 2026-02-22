import { OrganizationsGetUpdateBaseInfoDataToSign$Params } from '../../../swagger/fn/organizations/organizations-get-update-base-info-data-to-sign';
import { UpdateOrganizationBaseInfoRequestAlt } from '../../models/update-organization-base-info-request-alt.interface';
import { apiUpdateOrganizationBaseInfoRequestAltDtoAdapter } from '../../adapters/models/api-update-organization-base-info-request.adapter';

// @ts-ignore
export interface OrganizationsGetUpdateBaseInfoDataToSignParams {
  body?: UpdateOrganizationBaseInfoRequestAlt;
}

export function organizationsGetUpdateBaseInfoDataToSignAdapter(params?: OrganizationsGetUpdateBaseInfoDataToSignParams): OrganizationsGetUpdateBaseInfoDataToSign$Params {
  if (!params) {
    return {} as OrganizationsGetUpdateBaseInfoDataToSign$Params;
  }
  return {
      body: apiUpdateOrganizationBaseInfoRequestAltDtoAdapter(params.body),
  };
}
