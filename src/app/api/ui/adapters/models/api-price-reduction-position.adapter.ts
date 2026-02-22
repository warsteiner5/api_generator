import { PriceReductionPositionAlt } from '../../models/price-reduction-position-alt.interface';
import { ApiPriceReductionPositionAltDto } from '../../../swagger/models/api-price-reduction-position';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';

export const apiPriceReductionPositionAltDtoAdapter = (source?: PriceReductionPositionAlt | null): ApiPriceReductionPositionAltDto => {
  return {
    OrderNumber: source?.orderNumber,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
  };
}
