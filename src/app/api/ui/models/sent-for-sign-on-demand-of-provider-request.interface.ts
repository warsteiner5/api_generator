import { DealDocument } from './deal-document.interface';
import { DealObjectEnum } from '../enums/deal-object.enum';

export interface SentForSignOnDemandOfProviderRequest {
  applicationId: number;
  contractExecutionDate: string;
  dealComment: string;
  dealCustomNumber: string;
  dealObject: DealObjectEnum;
  documents: DealDocument[];
  organizationId: number;
  price: number;
  tradeId: number;
  tradeLotId: number;
}
