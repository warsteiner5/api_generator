import { ApiLotPositionPricesAltDto } from '../../../swagger/models/api-lot-position-prices';
import { LotPositionPricesAlt } from '../../models/lot-position-prices-alt.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';

export const lotPositionPricesAltAdapter = (source?: ApiLotPositionPricesAltDto | null): LotPositionPricesAlt => {
  return {
    quantity: source?.Quantity,
    unitPrice: source?.UnitPrice,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
  };
}
