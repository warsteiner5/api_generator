import { DictionariesGetKsrAutocompleteListGet$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-autocomplete-list-get';

// @ts-ignore
export interface DictionariesGetKsrAutocompleteListGetParams {
  searchValue: string;
  maxReturnCount: number;
}

export function dictionariesGetKsrAutocompleteListGetAdapter(params?: DictionariesGetKsrAutocompleteListGetParams): DictionariesGetKsrAutocompleteListGet$Params {
  if (!params) {
    return {} as DictionariesGetKsrAutocompleteListGet$Params;
  }
  return {
      searchValue: params.searchValue,
      maxReturnCount: params.maxReturnCount,
  };
}
