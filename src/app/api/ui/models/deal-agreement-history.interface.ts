import { DealAgreementDetail } from './deal-agreement-detail.interface';
import { DealAgreementHistoryStateEnum } from '../enums/deal-agreement-history-state.enum';
import { DealAgreementHistoryTypeEnum } from '../enums/deal-agreement-history-type.enum';

// @ts-ignore
export interface DealAgreementHistory {
  agreementState: DealAgreementHistoryStateEnum;
  buyerOrgId: number;
  dateTimeCreated: string;
  dealChangeDetails: DealAgreementDetail[];
  dealId: number;
  id: number;
  sellerOrgId: number;
  type: DealAgreementHistoryTypeEnum;
}
