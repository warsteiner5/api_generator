import { ApiOrganizationAddressDto } from '../../../swagger/models/api-organization-address-dto';
import { OrganizationAddress } from '../../models/organization-address.interface';

export const organizationAddressAdapter = (source?: ApiOrganizationAddressDto | null): OrganizationAddress => {
  return {
    registryAddress: source?.RegistryAddress,
  };
}
