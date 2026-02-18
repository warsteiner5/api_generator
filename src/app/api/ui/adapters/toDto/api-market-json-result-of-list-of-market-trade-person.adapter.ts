import { MarketJsonResultOfListOfMarketTradePerson } from '../../models/market-json-result-of-list-of-market-trade-person.interface';
import { ApiMarketJsonResultOfListOfMarketTradePerson } from '../../../swagger/models/api-market-json-result-of-list-of-market-trade-person';

export function adaptApiMarketJsonResultOfListOfMarketTradePerson(source?: MarketJsonResultOfListOfMarketTradePerson | null): ApiMarketJsonResultOfListOfMarketTradePerson {
  return (source ?? {}) as ApiMarketJsonResultOfListOfMarketTradePerson;
}
