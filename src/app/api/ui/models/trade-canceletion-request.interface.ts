import { ApplicationDocument } from './application-document.interface';

export interface TradeCanceletionRequest {
  attachments: ApplicationDocument[];
  cancellationReason: string;
  rejectionDate: string;
  tradeId: number;
}
