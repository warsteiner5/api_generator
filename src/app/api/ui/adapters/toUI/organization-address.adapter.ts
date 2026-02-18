import { ApiOrganizationAddressDto } from '../../../swagger/models/api-organization-address-dto';
import { OrganizationAddress } from '../../models/organization-address.interface';

export function adaptOrganizationAddressToUI(source?: ApiOrganizationAddressDto | null): OrganizationAddress {
  return {
    registryAddress: source?.RegistryAddress ?? '',
  };
}
