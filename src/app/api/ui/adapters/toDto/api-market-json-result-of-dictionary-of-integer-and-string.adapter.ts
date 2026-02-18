import { MarketJsonResultOfDictionaryOfIntegerAndString } from '../../models/market-json-result-of-dictionary-of-integer-and-string.interface';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndString } from '../../../swagger/models/api-market-json-result-of-dictionary-of-integer-and-string';

export function adaptApiMarketJsonResultOfDictionaryOfIntegerAndString(source?: MarketJsonResultOfDictionaryOfIntegerAndString | null): ApiMarketJsonResultOfDictionaryOfIntegerAndString {
  return (source ?? {}) as ApiMarketJsonResultOfDictionaryOfIntegerAndString;
}
