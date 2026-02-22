import { ApiOrganizationCountryDto } from '../../../swagger/models/api-organization-country-dto';
import { OrganizationCountry } from '../../models/organization-country.interface';

export const organizationCountryAdapter = (source?: ApiOrganizationCountryDto | null): OrganizationCountry => {
  return (source ?? {}) as OrganizationCountry;
}
