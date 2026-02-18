import { AvailableVatTypeEnum } from '../enums/available-vat-type.enum';

export interface CalculateLotSumRequestAlt {
  price: number;
  vatRate: AvailableVatTypeEnum;
}
