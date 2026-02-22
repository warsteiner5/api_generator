import { ApiOrganizationContactsDto } from '../../../swagger/models/api-organization-contacts-dto';
import { OrganizationContacts } from '../../models/organization-contacts.interface';
import { addressAdapter } from './address.adapter';

export const organizationContactsAdapter = (source?: ApiOrganizationContactsDto | null): OrganizationContacts => {
  return {
    address: source?.Address === null ? undefined : addressAdapter(source?.Address),
    addressesSimilar: source?.AddressesSimilar,
    contactPerson: source?.ContactPerson,
    displayContactInformationForOtherUsers: source?.DisplayContactInformationForOtherUsers,
    postAddress: source?.PostAddress === null ? undefined : addressAdapter(source?.PostAddress),
    webSiteUrl: source?.WebSiteUrl,
  };
}
