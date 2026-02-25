import { ApiOrganizationCountryDto } from '../../../swagger/models/api-organization-country-dto';
import { OrganizationCountry } from '../../models/organization-country.interface';
import { entityDtoOfIntegerAdapter } from './entity-dto-of-integer.adapter';

export const organizationCountryAdapter = (source?: ApiOrganizationCountryDto | null): OrganizationCountry => {
  return {
    ...entityDtoOfIntegerAdapter(source as unknown as Parameters<typeof entityDtoOfIntegerAdapter>[0]),
    code: source?.Code,
    name: source?.Name,
  };
}
