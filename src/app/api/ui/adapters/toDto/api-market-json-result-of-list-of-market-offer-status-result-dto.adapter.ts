import { MarketJsonResultOfListOfMarketOfferStatusResult } from '../../models/market-json-result-of-list-of-market-offer-status-result.interface';
import { ApiMarketJsonResultOfListOfMarketOfferStatusResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-offer-status-result-dto';

export function adaptApiMarketJsonResultOfListOfMarketOfferStatusResultDto(source?: MarketJsonResultOfListOfMarketOfferStatusResult | null): ApiMarketJsonResultOfListOfMarketOfferStatusResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMarketOfferStatusResultDto;
}
