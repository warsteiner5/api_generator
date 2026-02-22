import { ExternalDealDocument } from './external-deal-document.interface';
import { ExternalDealItem } from './external-deal-item.interface';
import { ExternalDealSupplier } from './external-deal-supplier.interface';

// @ts-ignore
export interface DealOutsideEShop {
  dealAgreemntDate: string;
  dealNumber: string;
  documents: ExternalDealDocument[];
  endExecutionDate: string;
  items: ExternalDealItem[];
  price: number;
  signedOutOfEpReason: string;
  startExecutionDate: string;
  subjectContract: string;
  supplier: ExternalDealSupplier;
  tradeNumber: string;
  tradePrice: number;
}
