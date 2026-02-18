import { ApiOrganizationContactsDto } from '../../../swagger/models/api-organization-contacts-dto';
import { OrganizationContacts } from '../../models/organization-contacts.interface';
import { adaptAddressToUI } from './address.adapter';

export function adaptOrganizationContactsToUI(source?: ApiOrganizationContactsDto | null): OrganizationContacts {
  return {
    address: adaptAddressToUI(source?.Address),
    addressesSimilar: source?.AddressesSimilar ?? false,
    contactPerson: source?.ContactPerson ?? '',
    displayContactInformationForOtherUsers: source?.DisplayContactInformationForOtherUsers ?? false,
    postAddress: adaptAddressToUI(source?.PostAddress),
    webSiteUrl: source?.WebSiteUrl ?? '',
  };
}
