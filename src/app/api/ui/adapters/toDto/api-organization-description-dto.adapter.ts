import { OrganizationDescription } from '../../models/organization-description.interface';
import { ApiOrganizationDescriptionDto } from '../../../swagger/models/api-organization-description-dto';
import { adaptApiTimeZoneInformationDto } from './api-time-zone-information-dto.adapter';

export function adaptApiOrganizationDescriptionDto(source?: OrganizationDescription | null): ApiOrganizationDescriptionDto {
  return {
    CreateYear: source?.createYear,
    Description: source?.description,
    FullName: source?.fullName,
    TimeZone: adaptApiTimeZoneInformationDto(source?.timeZone),
    YearlyIncome: source?.yearlyIncome,
  };
}
