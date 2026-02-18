import { PriceReductionPositionAlt } from '../../models/price-reduction-position-alt.interface';
import { ApiPriceReductionPositionAltDto } from '../../../swagger/models/api-price-reduction-position';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';

export function adaptApiPriceReductionPositionAltDto(source?: PriceReductionPositionAlt | null): ApiPriceReductionPositionAltDto {
  return {
    OrderNumber: source?.orderNumber,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
    VatRate: adaptApiAvailableVatTypeEnum(source?.vatRate),
  };
}
