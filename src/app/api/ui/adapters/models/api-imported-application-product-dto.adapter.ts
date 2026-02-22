import { ImportedApplicationProduct } from '../../models/imported-application-product.interface';
import { ApiImportedApplicationProductDto } from '../../../swagger/models/api-imported-application-product-dto';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';

export const apiImportedApplicationProductDtoAdapter = (source?: ImportedApplicationProduct | null): ApiImportedApplicationProductDto => {
  return {
    CountryConfirmation: source?.countryConfirmation,
    LotItemId: source?.lotItemId,
    ManufacturerCountryCode: source?.manufacturerCountryCode,
    ManufacturerCountryName: source?.manufacturerCountryName,
    PositionNumber: source?.positionNumber,
    Price: source?.price,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
  };
}
