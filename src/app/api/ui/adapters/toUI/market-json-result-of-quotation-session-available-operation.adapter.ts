import { ApiMarketJsonResultOfQuotationSessionAvailableOperationDto } from '../../../swagger/models/api-market-json-result-of-quotation-session-available-operation-dto';
import { MarketJsonResultOfQuotationSessionAvailableOperation } from '../../models/market-json-result-of-quotation-session-available-operation.interface';

export function adaptMarketJsonResultOfQuotationSessionAvailableOperationToUI(source?: ApiMarketJsonResultOfQuotationSessionAvailableOperationDto | null): MarketJsonResultOfQuotationSessionAvailableOperation {
  return (source ?? {}) as MarketJsonResultOfQuotationSessionAvailableOperation;
}
