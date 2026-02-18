import { ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo } from '../../../swagger/models/api-market-json-result-of-dictionary-of-integer-and-list-of-read-item-info';
import { MarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo } from '../../models/market-json-result-of-dictionary-of-integer-and-list-of-read-item-info.interface';

export function adaptMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfoToUI(source?: ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo | null): MarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo {
  return (source ?? {}) as MarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo;
}
