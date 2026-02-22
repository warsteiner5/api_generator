import { ApiImportedApplicationProductDto } from '../../../swagger/models/api-imported-application-product-dto';
import { ImportedApplicationProduct } from '../../models/imported-application-product.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';

export const importedApplicationProductAdapter = (source?: ApiImportedApplicationProductDto | null): ImportedApplicationProduct => {
  return {
    countryConfirmation: source?.CountryConfirmation,
    lotItemId: source?.LotItemId,
    manufacturerCountryCode: source?.ManufacturerCountryCode,
    manufacturerCountryName: source?.ManufacturerCountryName,
    positionNumber: source?.PositionNumber,
    price: source?.Price,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
  };
}
