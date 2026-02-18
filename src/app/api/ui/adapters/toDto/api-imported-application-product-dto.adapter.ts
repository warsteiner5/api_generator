import { ImportedApplicationProduct } from '../../models/imported-application-product.interface';
import { ApiImportedApplicationProductDto } from '../../../swagger/models/api-imported-application-product-dto';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';

export function adaptApiImportedApplicationProductDto(source?: ImportedApplicationProduct | null): ApiImportedApplicationProductDto {
  return {
    CountryConfirmation: source?.countryConfirmation,
    LotItemId: source?.lotItemId,
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ManufacturerCountryName: source?.manufacturerCountryName,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    VatRate: adaptApiAvailableVatTypeEnum(source?.vatRate),
  };
}
