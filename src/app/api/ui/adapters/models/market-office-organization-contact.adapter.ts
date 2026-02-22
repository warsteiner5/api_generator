import { ApiMarketOfficeOrganizationContactDto } from '../../../swagger/models/api-market-office-organization-contact-dto';
import { MarketOfficeOrganizationContact } from '../../models/market-office-organization-contact.interface';
import { marketWorkScheduleAdapter } from './market-work-schedule.adapter';

export const marketOfficeOrganizationContactAdapter = (source?: ApiMarketOfficeOrganizationContactDto | null): MarketOfficeOrganizationContact => {
  return {
    address: source?.Address,
    email: source?.Email,
    id: source?.Id,
    name: source?.Name,
    phoneNumbers: source?.PhoneNumbers,
    workSchedules: source?.WorkSchedules?.map((item) => marketWorkScheduleAdapter(item)),
  };
}
