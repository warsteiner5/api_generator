import { DictionariesGetKsrAutocompleteListGet$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-autocomplete-list-get';

export interface DictionariesGetKsrAutocompleteListGetParams {
  searchValue: string;
  maxReturnCount: number;
}

export const dictionariesGetKsrAutocompleteListGetParamsAdapter = {
  adapt(params?: DictionariesGetKsrAutocompleteListGetParams): DictionariesGetKsrAutocompleteListGet$Params {
    if (!params) {
      return {} as DictionariesGetKsrAutocompleteListGet$Params;
    }
    return {
      searchValue: params.searchValue,
      maxReturnCount: params.maxReturnCount,
    };
  }
};
