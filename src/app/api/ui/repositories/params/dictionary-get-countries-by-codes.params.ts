import { DictionaryGetCountriesByCodes$Params } from '../../../swagger/fn/dictionary/dictionary-get-countries-by-codes';

// @ts-ignore
export interface DictionaryGetCountriesByCodesParams {
  codes?: string[];
}

export function dictionaryGetCountriesByCodesAdapter(params?: DictionaryGetCountriesByCodesParams): DictionaryGetCountriesByCodes$Params {
  if (!params) {
    return {} as DictionaryGetCountriesByCodes$Params;
  }
  return {
      codes: params.codes,
  };
}
