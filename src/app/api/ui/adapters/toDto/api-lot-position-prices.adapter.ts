import { LotPositionPricesAlt } from '../../models/lot-position-prices-alt.interface';
import { ApiLotPositionPricesAltDto } from '../../../swagger/models/api-lot-position-prices';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';

export function adaptApiLotPositionPricesAltDto(source?: LotPositionPricesAlt | null): ApiLotPositionPricesAltDto {
  return {
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
    VatRate: adaptApiAvailableVatTypeEnum(source?.vatRate),
  };
}
