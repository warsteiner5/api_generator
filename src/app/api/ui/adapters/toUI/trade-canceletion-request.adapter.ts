import { ApiTradeCanceletionRequestDto } from '../../../swagger/models/api-trade-canceletion-request-dto';
import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { adaptApplicationDocumentToUI } from './application-document.adapter';

export function adaptTradeCanceletionRequestToUI(source?: ApiTradeCanceletionRequestDto | null): TradeCanceletionRequest {
  return {
    attachments: (source?.Attachments ?? []).map((item) => adaptApplicationDocumentToUI(item)),
    cancellationReason: source?.CancellationReason ?? '',
    rejectionDate: source?.RejectionDate ?? '',
    tradeId: source?.TradeId ?? 0,
  };
}
