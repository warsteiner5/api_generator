import { ApiMarketJsonResultOfTradeAvailableOperationsDto } from '../../../swagger/models/api-market-json-result-of-trade-available-operations-dto';
import { MarketJsonResultOfTradeAvailableOperations } from '../../models/market-json-result-of-trade-available-operations.interface';

export function adaptMarketJsonResultOfTradeAvailableOperationsToUI(source?: ApiMarketJsonResultOfTradeAvailableOperationsDto | null): MarketJsonResultOfTradeAvailableOperations {
  return (source ?? {}) as MarketJsonResultOfTradeAvailableOperations;
}
