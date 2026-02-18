import { MarketOfficeOrganizationContact } from '../../models/market-office-organization-contact.interface';
import { ApiMarketOfficeOrganizationContactDto } from '../../../swagger/models/api-market-office-organization-contact-dto';
import { adaptApiMarketWorkScheduleDto } from './api-market-work-schedule-dto.adapter';

export function adaptApiMarketOfficeOrganizationContactDto(source?: MarketOfficeOrganizationContact | null): ApiMarketOfficeOrganizationContactDto {
  return {
    Address: source?.address,
    Email: source?.email,
    Id: source?.id,
    Name: source?.name,
    PhoneNumbers: source?.phoneNumbers ?? [],
    WorkSchedules: (source?.workSchedules ?? []).map((item) => adaptApiMarketWorkScheduleDto(item)),
  };
}
