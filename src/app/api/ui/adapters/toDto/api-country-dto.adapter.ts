import { Country } from '../../models/country.interface';
import { ApiCountryDto } from '../../../swagger/models/api-country-dto';
import { adaptApiManufactureTypeEnum } from './api-manufacture-type-enum.adapter';

export function adaptApiCountryDto(source?: Country | null): ApiCountryDto {
  return {
    Code: source?.code,
    FullName: source?.fullName,
    ManufacturerType: adaptApiManufactureTypeEnum(source?.manufacturerType),
    Name: source?.name,
  };
}
