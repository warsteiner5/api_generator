import { OrganizationsUpdateAddresses$Params } from '../../../swagger/fn/organizations/organizations-update-addresses';
import { UpdateOrganizationAddressesRequestAlt } from '../../models/update-organization-addresses-request-alt.interface';
import { adaptApiUpdateOrganizationAddressesRequestAltDto } from '../../adapters/toDto/api-update-organization-addresses-request.adapter';

export interface OrganizationsUpdateAddressesParams {
  body?: UpdateOrganizationAddressesRequestAlt;
}

export const organizationsUpdateAddressesParamsAdapter = {
  adapt(params?: OrganizationsUpdateAddressesParams): OrganizationsUpdateAddresses$Params {
    if (!params) {
      return {} as OrganizationsUpdateAddresses$Params;
    }
    return {
      body: adaptApiUpdateOrganizationAddressesRequestAltDto(params.body),
    };
  }
};
