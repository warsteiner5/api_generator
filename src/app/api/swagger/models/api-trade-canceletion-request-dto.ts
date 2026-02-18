/* tslint:disable */
/* eslint-disable */
import { ApiApplicationDocumentDto } from '../models/api-application-document-dto';
export interface ApiTradeCanceletionRequestDto {
  Attachments?: Array<ApiApplicationDocumentDto> | null;
  CancellationReason?: string | null;
  RejectionDate?: string | null;
  TradeId?: number;
}
