import { MarketOrganizationContact } from '../../models/market-organization-contact.interface';
import { ApiMarketOrganizationContactDto } from '../../../swagger/models/api-market-organization-contact-dto';

export function adaptApiMarketOrganizationContactDto(source?: MarketOrganizationContact | null): ApiMarketOrganizationContactDto {
  return {
    FirstName: source?.firstName,
    Id: source?.id,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    OrganizationId: source?.organizationId,
    PhoneNumber: source?.phoneNumber,
    Position: source?.position,
  };
}
