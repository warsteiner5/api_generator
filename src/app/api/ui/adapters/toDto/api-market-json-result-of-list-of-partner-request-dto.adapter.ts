import { MarketJsonResultOfListOfPartnerRequest } from '../../models/market-json-result-of-list-of-partner-request.interface';
import { ApiMarketJsonResultOfListOfPartnerRequestDto } from '../../../swagger/models/api-market-json-result-of-list-of-partner-request-dto';

export function adaptApiMarketJsonResultOfListOfPartnerRequestDto(source?: MarketJsonResultOfListOfPartnerRequest | null): ApiMarketJsonResultOfListOfPartnerRequestDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfPartnerRequestDto;
}
