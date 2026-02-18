import { OrganizationsUpdateBaseInfo$Params } from '../../../swagger/fn/organizations/organizations-update-base-info';
import { UpdateOrganizationBaseInfoSignedRequestAlt } from '../../models/update-organization-base-info-signed-request-alt.interface';
import { adaptApiUpdateOrganizationBaseInfoSignedRequestAltDto } from '../../adapters/toDto/api-update-organization-base-info-signed-request.adapter';

export interface OrganizationsUpdateBaseInfoParams {
  body?: UpdateOrganizationBaseInfoSignedRequestAlt;
}

export const organizationsUpdateBaseInfoParamsAdapter = {
  adapt(params?: OrganizationsUpdateBaseInfoParams): OrganizationsUpdateBaseInfo$Params {
    if (!params) {
      return {} as OrganizationsUpdateBaseInfo$Params;
    }
    return {
      body: adaptApiUpdateOrganizationBaseInfoSignedRequestAltDto(params.body),
    };
  }
};
