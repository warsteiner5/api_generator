import { ApiCountryDto } from '../../../swagger/models/api-country-dto';
import { Country } from '../../models/country.interface';
import { adaptManufactureTypeEnumToUI } from './manufacture-type-enum.adapter';

export function adaptCountryToUI(source?: ApiCountryDto | null): Country {
  return {
    code: source?.Code ?? '',
    fullName: source?.FullName ?? '',
    manufacturerType: adaptManufactureTypeEnumToUI(source?.ManufacturerType),
    name: source?.Name ?? '',
  };
}
