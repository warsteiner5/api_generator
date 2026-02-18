import { ApiLotPositionPricesAltDto } from '../../../swagger/models/api-lot-position-prices';
import { LotPositionPricesAlt } from '../../models/lot-position-prices-alt.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';

export function adaptLotPositionPricesAltToUI(source?: ApiLotPositionPricesAltDto | null): LotPositionPricesAlt {
  return {
    quantity: source?.Quantity ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
    vatRate: adaptAvailableVatTypeEnumToUI(source?.VatRate),
  };
}
