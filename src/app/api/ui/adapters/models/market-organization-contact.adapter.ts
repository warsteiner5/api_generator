import { ApiMarketOrganizationContactDto } from '../../../swagger/models/api-market-organization-contact-dto';
import { MarketOrganizationContact } from '../../models/market-organization-contact.interface';

export const marketOrganizationContactAdapter = (source?: ApiMarketOrganizationContactDto | null): MarketOrganizationContact => {
  return {
    firstName: source?.FirstName,
    id: source?.Id,
    lastName: source?.LastName,
    middleName: source?.MiddleName,
    organizationId: source?.OrganizationId,
    phoneNumber: source?.PhoneNumber,
    position: source?.Position,
  };
}
