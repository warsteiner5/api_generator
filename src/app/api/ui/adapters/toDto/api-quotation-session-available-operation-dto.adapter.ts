import { QuotationSessionAvailableOperation } from '../../models/quotation-session-available-operation.interface';
import { ApiQuotationSessionAvailableOperationDto } from '../../../swagger/models/api-quotation-session-available-operation-dto';

export function adaptApiQuotationSessionAvailableOperationDto(source?: QuotationSessionAvailableOperation | null): ApiQuotationSessionAvailableOperationDto {
  return {
    AllowedToBid: source?.allowedToBid,
    AllowedToJoin: source?.allowedToJoin,
    IsTradeProtocolDownloadAllowed: source?.isTradeProtocolDownloadAllowed,
  };
}
