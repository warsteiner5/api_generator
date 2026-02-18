import { MarketJsonResultOfDictionaryOfIntegerAndInteger } from '../../models/market-json-result-of-dictionary-of-integer-and-integer.interface';
import { ApiMarketJsonResultOfDictionaryOfIntegerAndInteger } from '../../../swagger/models/api-market-json-result-of-dictionary-of-integer-and-integer';

export function adaptApiMarketJsonResultOfDictionaryOfIntegerAndInteger(source?: MarketJsonResultOfDictionaryOfIntegerAndInteger | null): ApiMarketJsonResultOfDictionaryOfIntegerAndInteger {
  return (source ?? {}) as ApiMarketJsonResultOfDictionaryOfIntegerAndInteger;
}
