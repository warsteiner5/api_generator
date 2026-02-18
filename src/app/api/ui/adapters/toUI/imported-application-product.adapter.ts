import { ApiImportedApplicationProductDto } from '../../../swagger/models/api-imported-application-product-dto';
import { ImportedApplicationProduct } from '../../models/imported-application-product.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';

export function adaptImportedApplicationProductToUI(source?: ApiImportedApplicationProductDto | null): ImportedApplicationProduct {
  return {
    countryConfirmation: source?.CountryConfirmation ?? '',
    lotItemId: source?.LotItemId ?? 0,
    manufacturerCountryCode: source?.ManufacturerCountryCode ?? '',
    manufacturerCountryName: source?.ManufacturerCountryName ?? '',
    positionNumber: source?.PositionNumber ?? 0,
    price: source?.Price ?? 0,
    vatRate: adaptAvailableVatTypeEnumToUI(source?.VatRate),
  };
}
