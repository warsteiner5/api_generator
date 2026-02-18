import { ApiQuotationSessionAvailableOperationDto } from '../../../swagger/models/api-quotation-session-available-operation-dto';
import { QuotationSessionAvailableOperation } from '../../models/quotation-session-available-operation.interface';

export function adaptQuotationSessionAvailableOperationToUI(source?: ApiQuotationSessionAvailableOperationDto | null): QuotationSessionAvailableOperation {
  return {
    allowedToBid: source?.AllowedToBid ?? false,
    allowedToJoin: source?.AllowedToJoin ?? false,
    isTradeProtocolDownloadAllowed: source?.IsTradeProtocolDownloadAllowed ?? false,
  };
}
