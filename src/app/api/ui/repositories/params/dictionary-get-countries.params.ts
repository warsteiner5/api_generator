import { DictionaryGetCountries$Params } from '../../../swagger/fn/dictionary/dictionary-get-countries';

// @ts-ignore
export interface DictionaryGetCountriesParams {
}

export function dictionaryGetCountriesAdapter(params?: DictionaryGetCountriesParams): DictionaryGetCountries$Params {
  if (!params) {
    return {} as DictionaryGetCountries$Params;
  }
  return {
  };
}
