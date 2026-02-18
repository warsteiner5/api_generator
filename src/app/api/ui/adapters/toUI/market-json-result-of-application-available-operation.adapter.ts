import { ApiMarketJsonResultOfApplicationAvailableOperationDto } from '../../../swagger/models/api-market-json-result-of-application-available-operation-dto';
import { MarketJsonResultOfApplicationAvailableOperation } from '../../models/market-json-result-of-application-available-operation.interface';

export function adaptMarketJsonResultOfApplicationAvailableOperationToUI(source?: ApiMarketJsonResultOfApplicationAvailableOperationDto | null): MarketJsonResultOfApplicationAvailableOperation {
  return (source ?? {}) as MarketJsonResultOfApplicationAvailableOperation;
}
