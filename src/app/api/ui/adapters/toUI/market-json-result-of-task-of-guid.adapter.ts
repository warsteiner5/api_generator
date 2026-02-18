import { ApiMarketJsonResultOfTaskOfGuid } from '../../../swagger/models/api-market-json-result-of-task-of-guid';
import { MarketJsonResultOfTaskOfGuid } from '../../models/market-json-result-of-task-of-guid.interface';

export function adaptMarketJsonResultOfTaskOfGuidToUI(source?: ApiMarketJsonResultOfTaskOfGuid | null): MarketJsonResultOfTaskOfGuid {
  return (source ?? {}) as MarketJsonResultOfTaskOfGuid;
}
