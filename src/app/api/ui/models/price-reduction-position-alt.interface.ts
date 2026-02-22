import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';

// @ts-ignore
export interface PriceReductionPositionAlt {
  orderNumber: number;
  quantity: number;
  unitPrice: number;
  vatRate: AvailableVatTypeEnum;
}
