import { ApiUpdateOrganizationAddressesRequestAltDto } from '../../../swagger/models/api-update-organization-addresses-request';
import { UpdateOrganizationAddressesRequestAlt } from '../../models/update-organization-addresses-request-alt.interface';
import { adaptAddressToUI } from './address.adapter';

export function adaptUpdateOrganizationAddressesRequestAltToUI(source?: ApiUpdateOrganizationAddressesRequestAltDto | null): UpdateOrganizationAddressesRequestAlt {
  return {
    addressesSimilar: source?.AddressesSimilar ?? false,
    homeKladrRegionCode: source?.HomeKladrRegionCode ?? '',
    legalAddress: adaptAddressToUI(source?.LegalAddress),
    postAddress: adaptAddressToUI(source?.PostAddress),
  };
}
