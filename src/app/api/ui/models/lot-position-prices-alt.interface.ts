import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';

// @ts-ignore
export interface LotPositionPricesAlt {
  quantity: number;
  unitPrice: number;
  vatRate: AvailableVatTypeEnum;
}
