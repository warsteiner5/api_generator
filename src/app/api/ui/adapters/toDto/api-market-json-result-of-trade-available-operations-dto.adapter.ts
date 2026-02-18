import { MarketJsonResultOfTradeAvailableOperations } from '../../models/market-json-result-of-trade-available-operations.interface';
import { ApiMarketJsonResultOfTradeAvailableOperationsDto } from '../../../swagger/models/api-market-json-result-of-trade-available-operations-dto';

export function adaptApiMarketJsonResultOfTradeAvailableOperationsDto(source?: MarketJsonResultOfTradeAvailableOperations | null): ApiMarketJsonResultOfTradeAvailableOperationsDto {
  return (source ?? {}) as ApiMarketJsonResultOfTradeAvailableOperationsDto;
}
