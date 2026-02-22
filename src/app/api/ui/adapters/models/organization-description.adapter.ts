import { ApiOrganizationDescriptionDto } from '../../../swagger/models/api-organization-description-dto';
import { OrganizationDescription } from '../../models/organization-description.interface';
import { timeZoneInformationAdapter } from './time-zone-information.adapter';

export const organizationDescriptionAdapter = (source?: ApiOrganizationDescriptionDto | null): OrganizationDescription => {
  return {
    createYear: source?.CreateYear,
    description: source?.Description,
    fullName: source?.FullName,
    timeZone: source?.TimeZone === null ? undefined : timeZoneInformationAdapter(source?.TimeZone),
    yearlyIncome: source?.YearlyIncome,
  };
}
