import { ApiMarketJsonResultOfListOfMarketTradePerson } from '../../../swagger/models/api-market-json-result-of-list-of-market-trade-person';
import { MarketJsonResultOfListOfMarketTradePerson } from '../../models/market-json-result-of-list-of-market-trade-person.interface';

export function adaptMarketJsonResultOfListOfMarketTradePersonToUI(source?: ApiMarketJsonResultOfListOfMarketTradePerson | null): MarketJsonResultOfListOfMarketTradePerson {
  return (source ?? {}) as MarketJsonResultOfListOfMarketTradePerson;
}
