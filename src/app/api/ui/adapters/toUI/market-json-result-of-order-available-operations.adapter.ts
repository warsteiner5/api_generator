import { ApiMarketJsonResultOfOrderAvailableOperationsDto } from '../../../swagger/models/api-market-json-result-of-order-available-operations-dto';
import { MarketJsonResultOfOrderAvailableOperations } from '../../models/market-json-result-of-order-available-operations.interface';

export function adaptMarketJsonResultOfOrderAvailableOperationsToUI(source?: ApiMarketJsonResultOfOrderAvailableOperationsDto | null): MarketJsonResultOfOrderAvailableOperations {
  return (source ?? {}) as MarketJsonResultOfOrderAvailableOperations;
}
