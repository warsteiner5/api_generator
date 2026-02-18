import { ExternalDealCardDocument } from './external-deal-card-document.interface';
import { ExternalDealCardLotItem } from './external-deal-card-lot-item.interface';
import { ExternalDealCardSupplier } from './external-deal-card-supplier.interface';

export interface ExternalDealCard {
  currencyCode: string;
  dealAgreemntDate: string;
  dealNumber: string;
  documents: ExternalDealCardDocument[];
  endExecutionDate: string;
  id: number;
  lotItems: ExternalDealCardLotItem[];
  price: number;
  signedOutOfEpReason: string;
  startExecutionDate: string;
  subjectContract: string;
  supplier: ExternalDealCardSupplier;
  tradeIdentificationCode: string;
}
