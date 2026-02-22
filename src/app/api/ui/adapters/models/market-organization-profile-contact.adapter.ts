import { ApiMarketOrganizationProfileContactDto } from '../../../swagger/models/api-market-organization-profile-contact-dto';
import { MarketOrganizationProfileContact } from '../../models/market-organization-profile-contact.interface';

export const marketOrganizationProfileContactAdapter = (source?: ApiMarketOrganizationProfileContactDto | null): MarketOrganizationProfileContact => {
  return {
    fio: source?.Fio,
    id: source?.Id,
    phoneNumber: source?.PhoneNumber,
    position: source?.Position,
  };
}
