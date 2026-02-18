import { MarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo } from '../../models/market-json-result-of-dictionary-of-integer-and-list-of-read-item-info.interface';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo } from '../../../swagger/models/api-market-json-result-of-dictionary-of-integer-and-list-of-read-item-info';

export function adaptApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo(source?: MarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo | null): ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo {
  return (source ?? {}) as ApiMarketJsonResultOfDictionaryOfIntegerAndListOfReadItemInfo;
}
