import { OrganizationSuggest } from '../../models/organization-suggest.interface';
import { ApiOrganizationSuggestDto } from '../../../swagger/models/api-organization-suggest-dto';
import { adaptApiSuggestDtoOfOrganizationAddressDto } from './api-suggest-dto-of-organization-address-dto.adapter';

export function adaptApiOrganizationSuggestDto(source?: OrganizationSuggest | null): ApiOrganizationSuggestDto {
  return {
    address: adaptApiSuggestDtoOfOrganizationAddressDto(source?.address),
    fullName: source?.fullName,
    inn: source?.inn,
    kpp: source?.kpp,
    managementName: source?.managementName,
    managementPost: source?.managementPost,
    ogrn: source?.ogrn,
    regionKladrId: source?.regionKladrId,
    regionNameWithType: source?.regionNameWithType,
    shortName: source?.shortName,
    type: source?.type,
  };
}
