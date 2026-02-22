import { LotPositionPricesAlt } from '../../models/lot-position-prices-alt.interface';
import { ApiLotPositionPricesAltDto } from '../../../swagger/models/api-lot-position-prices';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';

export const apiLotPositionPricesAltDtoAdapter = (source?: LotPositionPricesAlt | null): ApiLotPositionPricesAltDto => {
  return {
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
  };
}
