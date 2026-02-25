import { OrganizationCountry } from '../../models/organization-country.interface';
import { ApiOrganizationCountryDto } from '../../../swagger/models/api-organization-country-dto';
import { apiEntityDtoOfIntegerAdapter } from './api-entity-dto-of-integer.adapter';

export const apiOrganizationCountryDtoAdapter = (source?: OrganizationCountry | null): ApiOrganizationCountryDto => {
  return {
    ...apiEntityDtoOfIntegerAdapter(source as unknown as Parameters<typeof apiEntityDtoOfIntegerAdapter>[0]),
    Code: source?.code,
    Name: source?.name,
  };
}
