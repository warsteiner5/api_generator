import { OrganizationAddress } from '../../models/organization-address.interface';
import { ApiOrganizationAddressDto } from '../../../swagger/models/api-organization-address-dto';

export function adaptApiOrganizationAddressDto(source?: OrganizationAddress | null): ApiOrganizationAddressDto {
  return {
    RegistryAddress: source?.registryAddress,
  };
}
