import { MarketJsonResultOfClarificationRequests } from '../../models/market-json-result-of-clarification-requests.interface';
import { ApiMarketJsonResultOfClarificationRequestsDto } from '../../../swagger/models/api-market-json-result-of-clarification-requests-dto';

export function adaptApiMarketJsonResultOfClarificationRequestsDto(source?: MarketJsonResultOfClarificationRequests | null): ApiMarketJsonResultOfClarificationRequestsDto {
  return (source ?? {}) as ApiMarketJsonResultOfClarificationRequestsDto;
}
