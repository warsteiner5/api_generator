import { ApiQuotationSessionAvailableOperationDto } from '../../../swagger/models/api-quotation-session-available-operation-dto';
import { QuotationSessionAvailableOperation } from '../../models/quotation-session-available-operation.interface';

export const quotationSessionAvailableOperationAdapter = (source?: ApiQuotationSessionAvailableOperationDto | null): QuotationSessionAvailableOperation => {
  return {
    allowedToBid: source?.AllowedToBid,
    allowedToJoin: source?.AllowedToJoin,
    isTradeProtocolDownloadAllowed: source?.IsTradeProtocolDownloadAllowed,
  };
}
