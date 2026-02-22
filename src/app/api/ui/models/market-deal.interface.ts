import { DealFormEnum } from '../enums/deal-form.enum';
import { DealStateEnum } from '../enums/deal-state.enum';
import { DocumentAlt } from './document-alt.interface';

// @ts-ignore
export interface MarketDeal {
  applicationPrice: number;
  customerGuid: string;
  customerName: string;
  customerSignDate: string;
  dealForm: DealFormEnum;
  dealPrice: number;
  dealState: DealStateEnum;
  differenceProtocolDocuments: DocumentAlt[];
  documents: DocumentAlt[];
  id: number;
  isPriceWithVat: boolean;
  lotItemsSumPrice: number;
  sumVat: number;
  supplierGuid: string;
  supplierName: string;
  supplierSignDate: string;
  taxPercent: number;
  tradePrice: number;
}
