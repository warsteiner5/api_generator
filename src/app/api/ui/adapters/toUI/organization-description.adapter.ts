import { ApiOrganizationDescriptionDto } from '../../../swagger/models/api-organization-description-dto';
import { OrganizationDescription } from '../../models/organization-description.interface';
import { adaptTimeZoneInformationToUI } from './time-zone-information.adapter';

export function adaptOrganizationDescriptionToUI(source?: ApiOrganizationDescriptionDto | null): OrganizationDescription {
  return {
    createYear: source?.CreateYear ?? 0,
    description: source?.Description ?? '',
    fullName: source?.FullName ?? '',
    timeZone: adaptTimeZoneInformationToUI(source?.TimeZone),
    yearlyIncome: source?.YearlyIncome ?? 0,
  };
}
