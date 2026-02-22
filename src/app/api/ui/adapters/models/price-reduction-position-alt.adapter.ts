import { ApiPriceReductionPositionAltDto } from '../../../swagger/models/api-price-reduction-position';
import { PriceReductionPositionAlt } from '../../models/price-reduction-position-alt.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';

export const priceReductionPositionAltAdapter = (source?: ApiPriceReductionPositionAltDto | null): PriceReductionPositionAlt => {
  return {
    orderNumber: source?.OrderNumber,
    quantity: source?.Quantity,
    unitPrice: source?.UnitPrice,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
  };
}
