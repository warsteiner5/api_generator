import { ApiOrganizationRegistrationAddressDto } from '../../../swagger/models/api-organization-registration-address-dto';
import { OrganizationRegistrationAddress } from '../../models/organization-registration-address.interface';
import { addressAdapter } from './address.adapter';

export const organizationRegistrationAddressAdapter = (source?: ApiOrganizationRegistrationAddressDto | null): OrganizationRegistrationAddress => {
  return {
    addressesSimilar: source?.AddressesSimilar,
    homeRegion: source?.HomeRegion,
    legalAddress: source?.LegalAddress === null ? undefined : addressAdapter(source?.LegalAddress),
    postAddress: source?.PostAddress === null ? undefined : addressAdapter(source?.PostAddress),
  };
}
