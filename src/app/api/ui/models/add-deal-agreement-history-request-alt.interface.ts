import { DealAgreementHistoryTypeEnum } from '../enums/deal-agreement-history-type.enum';
import { FileInfoAlt } from './file-info-alt.interface';

// @ts-ignore
export interface AddDealAgreementHistoryRequestAlt {
  buyerId: number;
  dealAgreementDocuments: FileInfoAlt[];
  dealId: number;
  ownerId: number;
  sellerId: number;
  tradeId: number;
  type: DealAgreementHistoryTypeEnum;
}
