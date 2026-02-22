import { OrganizationContacts } from '../../models/organization-contacts.interface';
import { ApiOrganizationContactsDto } from '../../../swagger/models/api-organization-contacts-dto';
import { apiAddressDtoAdapter } from './api-address-dto.adapter';

export const apiOrganizationContactsDtoAdapter = (source?: OrganizationContacts | null): ApiOrganizationContactsDto => {
  return {
    Address: source?.address === null ? undefined : apiAddressDtoAdapter(source?.address),
    AddressesSimilar: source?.addressesSimilar,
    ContactPerson: source?.contactPerson,
    DisplayContactInformationForOtherUsers: source?.displayContactInformationForOtherUsers,
    PostAddress: source?.postAddress === null ? undefined : apiAddressDtoAdapter(source?.postAddress),
    WebSiteUrl: source?.webSiteUrl,
  };
}
