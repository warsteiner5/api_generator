import { UpdateOrganizationAddressesRequestAlt } from '../../models/update-organization-addresses-request-alt.interface';
import { ApiUpdateOrganizationAddressesRequestAltDto } from '../../../swagger/models/api-update-organization-addresses-request';
import { apiAddressDtoAdapter } from './api-address-dto.adapter';

export const apiUpdateOrganizationAddressesRequestAltDtoAdapter = (source?: UpdateOrganizationAddressesRequestAlt | null): ApiUpdateOrganizationAddressesRequestAltDto => {
  return {
    AddressesSimilar: source?.addressesSimilar,
    HomeKladrRegionCode: source?.homeKladrRegionCode,
    LegalAddress: source?.legalAddress === null ? undefined : apiAddressDtoAdapter(source?.legalAddress),
    PostAddress: source?.postAddress === null ? undefined : apiAddressDtoAdapter(source?.postAddress),
  };
}
