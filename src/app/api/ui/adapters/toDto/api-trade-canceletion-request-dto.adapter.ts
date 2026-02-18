import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { ApiTradeCanceletionRequestDto } from '../../../swagger/models/api-trade-canceletion-request-dto';
import { adaptApiApplicationDocumentDto } from './api-application-document-dto.adapter';

export function adaptApiTradeCanceletionRequestDto(source?: TradeCanceletionRequest | null): ApiTradeCanceletionRequestDto {
  return {
    Attachments: (source?.attachments ?? []).map((item) => adaptApiApplicationDocumentDto(item)),
    CancellationReason: source?.cancellationReason,
    RejectionDate: source?.rejectionDate,
    TradeId: source?.tradeId,
  };
}
