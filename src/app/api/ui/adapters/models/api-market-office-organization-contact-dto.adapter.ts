import { MarketOfficeOrganizationContact } from '../../models/market-office-organization-contact.interface';
import { ApiMarketOfficeOrganizationContactDto } from '../../../swagger/models/api-market-office-organization-contact-dto';
import { apiMarketWorkScheduleDtoAdapter } from './api-market-work-schedule-dto.adapter';

export const apiMarketOfficeOrganizationContactDtoAdapter = (source?: MarketOfficeOrganizationContact | null): ApiMarketOfficeOrganizationContactDto => {
  return {
    Address: source?.address,
    Email: source?.email,
    Id: source?.id,
    Name: source?.name,
    PhoneNumbers: source?.phoneNumbers,
    WorkSchedules: source?.workSchedules?.map((item) => apiMarketWorkScheduleDtoAdapter(item)),
  };
}
