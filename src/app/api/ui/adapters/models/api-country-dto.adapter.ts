import { Country } from '../../models/country.interface';
import { ApiCountryDto } from '../../../swagger/models/api-country-dto';
import { apiManufactureTypeEnumAdapter } from '../enums/api-manufacture-type-enum.adapter';

export const apiCountryDtoAdapter = (source?: Country | null): ApiCountryDto => {
  return {
    Code: source?.code,
    FullName: source?.fullName,
    ManufacturerType: source?.manufacturerType === null ? undefined : apiManufactureTypeEnumAdapter(source?.manufacturerType),
    Name: source?.name,
  };
}
