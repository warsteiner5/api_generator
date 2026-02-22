import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';

// @ts-ignore
export interface CalculateLotSumRequestAlt {
  price: number;
  vatRate: AvailableVatTypeEnum;
}
