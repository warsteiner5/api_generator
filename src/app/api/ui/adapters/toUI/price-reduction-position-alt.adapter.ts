import { ApiPriceReductionPositionAltDto } from '../../../swagger/models/api-price-reduction-position';
import { PriceReductionPositionAlt } from '../../models/price-reduction-position-alt.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';

export function adaptPriceReductionPositionAltToUI(source?: ApiPriceReductionPositionAltDto | null): PriceReductionPositionAlt {
  return {
    orderNumber: source?.OrderNumber ?? 0,
    quantity: source?.Quantity ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
    vatRate: adaptAvailableVatTypeEnumToUI(source?.VatRate),
  };
}
