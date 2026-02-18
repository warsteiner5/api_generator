import { ApiMarketJsonResultOfClarificationRequestsDto } from '../../../swagger/models/api-market-json-result-of-clarification-requests-dto';
import { MarketJsonResultOfClarificationRequests } from '../../models/market-json-result-of-clarification-requests.interface';

export function adaptMarketJsonResultOfClarificationRequestsToUI(source?: ApiMarketJsonResultOfClarificationRequestsDto | null): MarketJsonResultOfClarificationRequests {
  return (source ?? {}) as MarketJsonResultOfClarificationRequests;
}
