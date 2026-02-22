import { OrganizationsUpdateAddresses$Params } from '../../../swagger/fn/organizations/organizations-update-addresses';
import { UpdateOrganizationAddressesRequestAlt } from '../../models/update-organization-addresses-request-alt.interface';
import { apiUpdateOrganizationAddressesRequestAltDtoAdapter } from '../../adapters/models/api-update-organization-addresses-request.adapter';

// @ts-ignore
export interface OrganizationsUpdateAddressesParams {
  body?: UpdateOrganizationAddressesRequestAlt;
}

export function organizationsUpdateAddressesAdapter(params?: OrganizationsUpdateAddressesParams): OrganizationsUpdateAddresses$Params {
  if (!params) {
    return {} as OrganizationsUpdateAddresses$Params;
  }
  return {
      body: apiUpdateOrganizationAddressesRequestAltDtoAdapter(params.body),
  };
}
