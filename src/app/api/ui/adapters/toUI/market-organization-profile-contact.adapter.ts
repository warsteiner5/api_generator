import { ApiMarketOrganizationProfileContactDto } from '../../../swagger/models/api-market-organization-profile-contact-dto';
import { MarketOrganizationProfileContact } from '../../models/market-organization-profile-contact.interface';

export function adaptMarketOrganizationProfileContactToUI(source?: ApiMarketOrganizationProfileContactDto | null): MarketOrganizationProfileContact {
  return {
    fio: source?.Fio ?? '',
    id: source?.Id ?? 0,
    phoneNumber: source?.PhoneNumber ?? '',
    position: source?.Position ?? '',
  };
}
