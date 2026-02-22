import { SuggestDtoOfOrganizationAddress } from '../../models/suggest-dto-of-organization-address.interface';
import { ApiSuggestDtoOfOrganizationAddressDto } from '../../../swagger/models/api-suggest-dto-of-organization-address-dto';
import { apiOrganizationAddressDtoAdapter } from './api-organization-address-dto.adapter';

export const apiSuggestDtoOfOrganizationAddressDtoAdapter = (source?: SuggestDtoOfOrganizationAddress | null): ApiSuggestDtoOfOrganizationAddressDto => {
  return {
    data: source?.data === null ? undefined : apiOrganizationAddressDtoAdapter(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
