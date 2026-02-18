import { ApiMarketJsonResultOfListOfIdName } from '../../../swagger/models/api-market-json-result-of-list-of-id-name';
import { MarketJsonResultOfListOfIdName } from '../../models/market-json-result-of-list-of-id-name.interface';

export function adaptMarketJsonResultOfListOfIdNameToUI(source?: ApiMarketJsonResultOfListOfIdName | null): MarketJsonResultOfListOfIdName {
  return (source ?? {}) as MarketJsonResultOfListOfIdName;
}
