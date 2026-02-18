import { MarketJsonResultOfTaskOfGuid } from '../../models/market-json-result-of-task-of-guid.interface';
import { ApiMarketJsonResultOfTaskOfGuid } from '../../../swagger/models/api-market-json-result-of-task-of-guid';

export function adaptApiMarketJsonResultOfTaskOfGuid(source?: MarketJsonResultOfTaskOfGuid | null): ApiMarketJsonResultOfTaskOfGuid {
  return (source ?? {}) as ApiMarketJsonResultOfTaskOfGuid;
}
