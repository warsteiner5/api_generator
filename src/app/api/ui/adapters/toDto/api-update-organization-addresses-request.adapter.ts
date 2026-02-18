import { UpdateOrganizationAddressesRequestAlt } from '../../models/update-organization-addresses-request-alt.interface';
import { ApiUpdateOrganizationAddressesRequestAltDto } from '../../../swagger/models/api-update-organization-addresses-request';
import { adaptApiAddressDto } from './api-address-dto.adapter';

export function adaptApiUpdateOrganizationAddressesRequestAltDto(source?: UpdateOrganizationAddressesRequestAlt | null): ApiUpdateOrganizationAddressesRequestAltDto {
  return {
    AddressesSimilar: source?.addressesSimilar,
    HomeKladrRegionCode: source?.homeKladrRegionCode,
    LegalAddress: adaptApiAddressDto(source?.legalAddress),
    PostAddress: adaptApiAddressDto(source?.postAddress),
  };
}
