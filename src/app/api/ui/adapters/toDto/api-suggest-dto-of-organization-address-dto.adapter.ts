import { SuggestDtoOfOrganizationAddress } from '../../models/suggest-dto-of-organization-address.interface';
import { ApiSuggestDtoOfOrganizationAddressDto } from '../../../swagger/models/api-suggest-dto-of-organization-address-dto';
import { adaptApiOrganizationAddressDto } from './api-organization-address-dto.adapter';

export function adaptApiSuggestDtoOfOrganizationAddressDto(source?: SuggestDtoOfOrganizationAddress | null): ApiSuggestDtoOfOrganizationAddressDto {
  return {
    data: adaptApiOrganizationAddressDto(source?.data),
    unrestricted_value: source?.unrestrictedValue,
    value: source?.value,
  };
}
