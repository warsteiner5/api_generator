import { ApplicationDocument } from './application-document.interface';

// @ts-ignore
export interface TradeCanceletionRequest {
  attachments: ApplicationDocument[];
  cancellationReason: string;
  rejectionDate: string;
  tradeId: number;
}
