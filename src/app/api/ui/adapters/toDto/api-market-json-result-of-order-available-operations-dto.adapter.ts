import { MarketJsonResultOfOrderAvailableOperations } from '../../models/market-json-result-of-order-available-operations.interface';
import { ApiMarketJsonResultOfOrderAvailableOperationsDto } from '../../../swagger/models/api-market-json-result-of-order-available-operations-dto';

export function adaptApiMarketJsonResultOfOrderAvailableOperationsDto(source?: MarketJsonResultOfOrderAvailableOperations | null): ApiMarketJsonResultOfOrderAvailableOperationsDto {
  return (source ?? {}) as ApiMarketJsonResultOfOrderAvailableOperationsDto;
}
