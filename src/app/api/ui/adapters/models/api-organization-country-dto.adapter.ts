import { OrganizationCountry } from '../../models/organization-country.interface';
import { ApiOrganizationCountryDto } from '../../../swagger/models/api-organization-country-dto';

export const apiOrganizationCountryDtoAdapter = (source?: OrganizationCountry | null): ApiOrganizationCountryDto => {
  return (source ?? {}) as ApiOrganizationCountryDto;
}
