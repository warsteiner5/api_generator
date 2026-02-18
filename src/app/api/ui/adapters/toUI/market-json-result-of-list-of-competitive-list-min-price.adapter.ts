import { ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto } from '../../../swagger/models/api-market-json-result-of-list-of-competitive-list-min-price-dto';
import { MarketJsonResultOfListOfCompetitiveListMinPrice } from '../../models/market-json-result-of-list-of-competitive-list-min-price.interface';

export function adaptMarketJsonResultOfListOfCompetitiveListMinPriceToUI(source?: ApiMarketJsonResultOfListOfCompetitiveListMinPriceDto | null): MarketJsonResultOfListOfCompetitiveListMinPrice {
  return (source ?? {}) as MarketJsonResultOfListOfCompetitiveListMinPrice;
}
