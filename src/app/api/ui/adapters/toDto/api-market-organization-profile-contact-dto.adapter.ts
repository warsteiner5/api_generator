import { MarketOrganizationProfileContact } from '../../models/market-organization-profile-contact.interface';
import { ApiMarketOrganizationProfileContactDto } from '../../../swagger/models/api-market-organization-profile-contact-dto';

export function adaptApiMarketOrganizationProfileContactDto(source?: MarketOrganizationProfileContact | null): ApiMarketOrganizationProfileContactDto {
  return {
    Fio: source?.fio,
    Id: source?.id,
    PhoneNumber: source?.phoneNumber,
    Position: source?.position,
  };
}
