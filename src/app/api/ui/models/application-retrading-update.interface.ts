import { ApplicationItem } from './application-item.interface';

// @ts-ignore
export interface ApplicationRetradingUpdate {
  applicationItems: ApplicationItem[];
  id: number;
  isQuotationWithVat: boolean;
  price: number;
  sumVat: number;
  taxPercent: number;
  tradeId: number;
  tradeLotId: number;
}
