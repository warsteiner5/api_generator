import { ApiSuggestDtoOfOrganizationAddressDto } from '../../../swagger/models/api-suggest-dto-of-organization-address-dto';
import { SuggestDtoOfOrganizationAddress } from '../../models/suggest-dto-of-organization-address.interface';
import { adaptOrganizationAddressToUI } from './organization-address.adapter';

export function adaptSuggestDtoOfOrganizationAddressToUI(source?: ApiSuggestDtoOfOrganizationAddressDto | null): SuggestDtoOfOrganizationAddress {
  return {
    data: adaptOrganizationAddressToUI(source?.data),
    unrestrictedValue: source?.unrestricted_value ?? '',
    value: source?.value ?? '',
  };
}
