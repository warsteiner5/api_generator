import { OrganizationContacts } from '../../models/organization-contacts.interface';
import { ApiOrganizationContactsDto } from '../../../swagger/models/api-organization-contacts-dto';
import { adaptApiAddressDto } from './api-address-dto.adapter';

export function adaptApiOrganizationContactsDto(source?: OrganizationContacts | null): ApiOrganizationContactsDto {
  return {
    Address: adaptApiAddressDto(source?.address),
    AddressesSimilar: source?.addressesSimilar,
    ContactPerson: source?.contactPerson,
    DisplayContactInformationForOtherUsers: source?.displayContactInformationForOtherUsers,
    PostAddress: adaptApiAddressDto(source?.postAddress),
    WebSiteUrl: source?.webSiteUrl,
  };
}
