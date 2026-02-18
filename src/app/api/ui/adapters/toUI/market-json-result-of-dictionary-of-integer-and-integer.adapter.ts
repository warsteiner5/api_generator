import { ApiMarketJsonResultOfDictionaryOfIntegerAndInteger } from '../../../swagger/models/api-market-json-result-of-dictionary-of-integer-and-integer';
import { MarketJsonResultOfDictionaryOfIntegerAndInteger } from '../../models/market-json-result-of-dictionary-of-integer-and-integer.interface';

export function adaptMarketJsonResultOfDictionaryOfIntegerAndIntegerToUI(source?: ApiMarketJsonResultOfDictionaryOfIntegerAndInteger | null): MarketJsonResultOfDictionaryOfIntegerAndInteger {
  return (source ?? {}) as MarketJsonResultOfDictionaryOfIntegerAndInteger;
}
