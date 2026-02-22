import { OrganizationsUpdateBaseInfo$Params } from '../../../swagger/fn/organizations/organizations-update-base-info';
import { UpdateOrganizationBaseInfoSignedRequestAlt } from '../../models/update-organization-base-info-signed-request-alt.interface';
import { apiUpdateOrganizationBaseInfoSignedRequestAltDtoAdapter } from '../../adapters/models/api-update-organization-base-info-signed-request.adapter';

// @ts-ignore
export interface OrganizationsUpdateBaseInfoParams {
  body?: UpdateOrganizationBaseInfoSignedRequestAlt;
}

export function organizationsUpdateBaseInfoAdapter(params?: OrganizationsUpdateBaseInfoParams): OrganizationsUpdateBaseInfo$Params {
  if (!params) {
    return {} as OrganizationsUpdateBaseInfo$Params;
  }
  return {
      body: apiUpdateOrganizationBaseInfoSignedRequestAltDtoAdapter(params.body),
  };
}
