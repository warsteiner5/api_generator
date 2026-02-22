import { ApiTradeCanceletionRequestDto } from '../../../swagger/models/api-trade-canceletion-request-dto';
import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { applicationDocumentAdapter } from './application-document.adapter';

export const tradeCanceletionRequestAdapter = (source?: ApiTradeCanceletionRequestDto | null): TradeCanceletionRequest => {
  return {
    attachments: source?.Attachments?.map((item) => applicationDocumentAdapter(item)),
    cancellationReason: source?.CancellationReason,
    rejectionDate: source?.RejectionDate,
    tradeId: source?.TradeId,
  };
}
