import { OrganizationRegistrationAddress } from '../../models/organization-registration-address.interface';
import { ApiOrganizationRegistrationAddressDto } from '../../../swagger/models/api-organization-registration-address-dto';
import { adaptApiAddressDto } from './api-address-dto.adapter';

export function adaptApiOrganizationRegistrationAddressDto(source?: OrganizationRegistrationAddress | null): ApiOrganizationRegistrationAddressDto {
  return {
    AddressesSimilar: source?.addressesSimilar,
    HomeRegion: source?.homeRegion,
    LegalAddress: adaptApiAddressDto(source?.legalAddress),
    PostAddress: adaptApiAddressDto(source?.postAddress),
  };
}
