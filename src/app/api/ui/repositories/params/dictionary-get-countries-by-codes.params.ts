import { DictionaryGetCountriesByCodes$Params } from '../../../swagger/fn/dictionary/dictionary-get-countries-by-codes';

export interface DictionaryGetCountriesByCodesParams {
  codes?: string[];
}

export const dictionaryGetCountriesByCodesParamsAdapter = {
  adapt(params?: DictionaryGetCountriesByCodesParams): DictionaryGetCountriesByCodes$Params {
    if (!params) {
      return {} as DictionaryGetCountriesByCodes$Params;
    }
    return {
      codes: params.codes,
    };
  }
};
