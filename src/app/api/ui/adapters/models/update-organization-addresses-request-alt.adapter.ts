import { ApiUpdateOrganizationAddressesRequestAltDto } from '../../../swagger/models/api-update-organization-addresses-request';
import { UpdateOrganizationAddressesRequestAlt } from '../../models/update-organization-addresses-request-alt.interface';
import { addressAdapter } from './address.adapter';

export const updateOrganizationAddressesRequestAltAdapter = (source?: ApiUpdateOrganizationAddressesRequestAltDto | null): UpdateOrganizationAddressesRequestAlt => {
  return {
    addressesSimilar: source?.AddressesSimilar,
    homeKladrRegionCode: source?.HomeKladrRegionCode,
    legalAddress: source?.LegalAddress === null ? undefined : addressAdapter(source?.LegalAddress),
    postAddress: source?.PostAddress === null ? undefined : addressAdapter(source?.PostAddress),
  };
}
