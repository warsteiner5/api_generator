import { MarketJsonResultOfListOfMarketOfferDatesResult } from '../../models/market-json-result-of-list-of-market-offer-dates-result.interface';
import { ApiMarketJsonResultOfListOfMarketOfferDatesResultDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-offer-dates-result-dto';

export function adaptApiMarketJsonResultOfListOfMarketOfferDatesResultDto(source?: MarketJsonResultOfListOfMarketOfferDatesResult | null): ApiMarketJsonResultOfListOfMarketOfferDatesResultDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMarketOfferDatesResultDto;
}
