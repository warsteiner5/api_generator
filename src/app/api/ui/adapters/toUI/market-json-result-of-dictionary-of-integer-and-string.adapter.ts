import { ApiMarketJsonResultOfDictionaryOfIntegerAndString } from '../../../swagger/models/api-market-json-result-of-dictionary-of-integer-and-string';
import { MarketJsonResultOfDictionaryOfIntegerAndString } from '../../models/market-json-result-of-dictionary-of-integer-and-string.interface';

export function adaptMarketJsonResultOfDictionaryOfIntegerAndStringToUI(source?: ApiMarketJsonResultOfDictionaryOfIntegerAndString | null): MarketJsonResultOfDictionaryOfIntegerAndString {
  return (source ?? {}) as MarketJsonResultOfDictionaryOfIntegerAndString;
}
