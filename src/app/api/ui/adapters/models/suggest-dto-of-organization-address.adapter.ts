import { ApiSuggestDtoOfOrganizationAddressDto } from '../../../swagger/models/api-suggest-dto-of-organization-address-dto';
import { SuggestDtoOfOrganizationAddress } from '../../models/suggest-dto-of-organization-address.interface';
import { organizationAddressAdapter } from './organization-address.adapter';

export const suggestDtoOfOrganizationAddressAdapter = (source?: ApiSuggestDtoOfOrganizationAddressDto | null): SuggestDtoOfOrganizationAddress => {
  return {
    data: source?.data === null ? undefined : organizationAddressAdapter(source?.data),
    unrestrictedValue: source?.unrestricted_value,
    value: source?.value,
  };
}
