import { ApiOrganizationRegistrationAddressDto } from '../../../swagger/models/api-organization-registration-address-dto';
import { OrganizationRegistrationAddress } from '../../models/organization-registration-address.interface';
import { adaptAddressToUI } from './address.adapter';

export function adaptOrganizationRegistrationAddressToUI(source?: ApiOrganizationRegistrationAddressDto | null): OrganizationRegistrationAddress {
  return {
    addressesSimilar: source?.AddressesSimilar ?? false,
    homeRegion: source?.HomeRegion ?? '',
    legalAddress: adaptAddressToUI(source?.LegalAddress),
    postAddress: adaptAddressToUI(source?.PostAddress),
  };
}
