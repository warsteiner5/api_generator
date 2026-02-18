import { MarketJsonResultOfQuotationSessionAvailableOperation } from '../../models/market-json-result-of-quotation-session-available-operation.interface';
import { ApiMarketJsonResultOfQuotationSessionAvailableOperationDto } from '../../../swagger/models/api-market-json-result-of-quotation-session-available-operation-dto';

export function adaptApiMarketJsonResultOfQuotationSessionAvailableOperationDto(source?: MarketJsonResultOfQuotationSessionAvailableOperation | null): ApiMarketJsonResultOfQuotationSessionAvailableOperationDto {
  return (source ?? {}) as ApiMarketJsonResultOfQuotationSessionAvailableOperationDto;
}
