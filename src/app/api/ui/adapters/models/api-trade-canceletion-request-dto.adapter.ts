import { TradeCanceletionRequest } from '../../models/trade-canceletion-request.interface';
import { ApiTradeCanceletionRequestDto } from '../../../swagger/models/api-trade-canceletion-request-dto';
import { apiApplicationDocumentDtoAdapter } from './api-application-document-dto.adapter';

export const apiTradeCanceletionRequestDtoAdapter = (source?: TradeCanceletionRequest | null): ApiTradeCanceletionRequestDto => {
  return {
    Attachments: source?.attachments?.map((item) => apiApplicationDocumentDtoAdapter(item)),
    CancellationReason: source?.cancellationReason,
    RejectionDate: source?.rejectionDate,
    TradeId: source?.tradeId,
  };
}
