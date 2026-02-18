import { ApiMarketJsonResultOfListOfPartnerRequestDto } from '../../../swagger/models/api-market-json-result-of-list-of-partner-request-dto';
import { MarketJsonResultOfListOfPartnerRequest } from '../../models/market-json-result-of-list-of-partner-request.interface';

export function adaptMarketJsonResultOfListOfPartnerRequestToUI(source?: ApiMarketJsonResultOfListOfPartnerRequestDto | null): MarketJsonResultOfListOfPartnerRequest {
  return (source ?? {}) as MarketJsonResultOfListOfPartnerRequest;
}
