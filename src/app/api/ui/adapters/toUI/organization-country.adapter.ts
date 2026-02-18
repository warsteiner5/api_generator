import { ApiOrganizationCountryDto } from '../../../swagger/models/api-organization-country-dto';
import { OrganizationCountry } from '../../models/organization-country.interface';

export function adaptOrganizationCountryToUI(source?: ApiOrganizationCountryDto | null): OrganizationCountry {
  return (source ?? {}) as OrganizationCountry;
}
