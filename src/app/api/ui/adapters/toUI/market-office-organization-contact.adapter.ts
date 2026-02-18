import { ApiMarketOfficeOrganizationContactDto } from '../../../swagger/models/api-market-office-organization-contact-dto';
import { MarketOfficeOrganizationContact } from '../../models/market-office-organization-contact.interface';
import { adaptMarketWorkScheduleToUI } from './market-work-schedule.adapter';

export function adaptMarketOfficeOrganizationContactToUI(source?: ApiMarketOfficeOrganizationContactDto | null): MarketOfficeOrganizationContact {
  return {
    address: source?.Address ?? '',
    email: source?.Email ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    phoneNumbers: source?.PhoneNumbers ?? [],
    workSchedules: (source?.WorkSchedules ?? []).map((item) => adaptMarketWorkScheduleToUI(item)),
  };
}
