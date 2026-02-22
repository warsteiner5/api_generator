import { ApiOrganizationSuggestDto } from '../../../swagger/models/api-organization-suggest-dto';
import { OrganizationSuggest } from '../../models/organization-suggest.interface';
import { suggestDtoOfOrganizationAddressAdapter } from './suggest-dto-of-organization-address.adapter';

export const organizationSuggestAdapter = (source?: ApiOrganizationSuggestDto | null): OrganizationSuggest => {
  return {
    address: source?.address === null ? undefined : suggestDtoOfOrganizationAddressAdapter(source?.address),
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
