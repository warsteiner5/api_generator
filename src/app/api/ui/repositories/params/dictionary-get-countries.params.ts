import { DictionaryGetCountries$Params } from '../../../swagger/fn/dictionary/dictionary-get-countries';

export interface DictionaryGetCountriesParams {
}

export const dictionaryGetCountriesParamsAdapter = {
  adapt(params?: DictionaryGetCountriesParams): DictionaryGetCountries$Params {
    if (!params) {
      return {} as DictionaryGetCountries$Params;
    }
    return {
    };
  }
};
