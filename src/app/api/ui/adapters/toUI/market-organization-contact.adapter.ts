import { ApiMarketOrganizationContactDto } from '../../../swagger/models/api-market-organization-contact-dto';
import { MarketOrganizationContact } from '../../models/market-organization-contact.interface';

export function adaptMarketOrganizationContactToUI(source?: ApiMarketOrganizationContactDto | null): MarketOrganizationContact {
  return {
    firstName: source?.FirstName ?? '',
    id: source?.Id ?? 0,
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
    organizationId: source?.OrganizationId ?? 0,
    phoneNumber: source?.PhoneNumber ?? '',
    position: source?.Position ?? '',
  };
}
