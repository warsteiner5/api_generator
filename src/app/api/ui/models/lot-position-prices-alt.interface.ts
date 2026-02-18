import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';

export interface LotPositionPricesAlt {
  quantity: number;
  unitPrice: number;
  vatRate: AvailableVatTypeEnum;
}
