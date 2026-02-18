import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';

export interface PriceReductionPositionAlt {
  orderNumber: number;
  quantity: number;
  unitPrice: number;
  vatRate: AvailableVatTypeEnum;
}
