import { ExternalDealDocument } from './external-deal-document.interface';
import { ExternalDealInfoStateEnum } from '../enums/external-deal-info-state.enum';
import { ExternalDealItem } from './external-deal-item.interface';
import { ExternalDealSupplier } from './external-deal-supplier.interface';
import { SignedOutOfEpReasonTypeEnum } from '../enums/signed-out-of-ep-reason-type.enum';

// @ts-ignore
export interface ExternalDeal {
  dealAgreementDate: string;
  dealNumber: string;
  documents: ExternalDealDocument[];
  endExecutionDate: string;
  id: number;
  isExecutionBeforeAgreementDate: boolean;
  items: ExternalDealItem[];
  price: number;
  priceWarningMessage: string;
  signedOutOfEpReason: string;
  signedOutOfEpReasonType: SignedOutOfEpReasonTypeEnum;
  startExecutionDate: string;
  state: ExternalDealInfoStateEnum;
  subjectContract: string;
  supplier: ExternalDealSupplier;
  tradeNumber: string;
  tradePrice: number;
}
