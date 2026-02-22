import { ApiCountryDto } from '../../../swagger/models/api-country-dto';
import { Country } from '../../models/country.interface';
import { manufactureTypeEnumAdapter } from '../enums/manufacture-type-enum.adapter';

export const countryAdapter = (source?: ApiCountryDto | null): Country => {
  return {
    code: source?.Code,
    fullName: source?.FullName,
    manufacturerType: source?.ManufacturerType === null ? undefined : manufactureTypeEnumAdapter(source?.ManufacturerType),
    name: source?.Name,
  };
}
