import { OrganizationRegistrationAddress } from '../../models/organization-registration-address.interface';
import { ApiOrganizationRegistrationAddressDto } from '../../../swagger/models/api-organization-registration-address-dto';
import { apiAddressDtoAdapter } from './api-address-dto.adapter';

export const apiOrganizationRegistrationAddressDtoAdapter = (source?: OrganizationRegistrationAddress | null): ApiOrganizationRegistrationAddressDto => {
  return {
    AddressesSimilar: source?.addressesSimilar,
    HomeRegion: source?.homeRegion,
    LegalAddress: source?.legalAddress === null ? undefined : apiAddressDtoAdapter(source?.legalAddress),
    PostAddress: source?.postAddress === null ? undefined : apiAddressDtoAdapter(source?.postAddress),
  };
}
