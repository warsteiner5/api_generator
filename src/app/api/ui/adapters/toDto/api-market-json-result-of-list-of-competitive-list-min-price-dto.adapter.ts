import { MarketJsonResultOfListOfCompetitiveListMinPrice } from '../../models/market-json-result-of-list-of-competitive-list-min-price.interface';
import { ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto } from '../../../swagger/models/api-market-json-result-of-list-of-competitive-list-min-price-dto';

export function adaptApiMarketJsonResultOfListOfCompetitiveListMinPriceDto(source?: MarketJsonResultOfListOfCompetitiveListMinPrice | null): ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto;
}
