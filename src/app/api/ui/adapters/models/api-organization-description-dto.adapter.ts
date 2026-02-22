import { OrganizationDescription } from '../../models/organization-description.interface';
import { ApiOrganizationDescriptionDto } from '../../../swagger/models/api-organization-description-dto';
import { apiTimeZoneInformationDtoAdapter } from './api-time-zone-information-dto.adapter';

export const apiOrganizationDescriptionDtoAdapter = (source?: OrganizationDescription | null): ApiOrganizationDescriptionDto => {
  return {
    CreateYear: source?.createYear,
    Description: source?.description,
    FullName: source?.fullName,
    TimeZone: source?.timeZone === null ? undefined : apiTimeZoneInformationDtoAdapter(source?.timeZone),
    YearlyIncome: source?.yearlyIncome,
  };
}
