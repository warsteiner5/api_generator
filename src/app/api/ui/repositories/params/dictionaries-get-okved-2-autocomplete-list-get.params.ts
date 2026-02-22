import { DictionariesGetOkved2AutocompleteListGet$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okved-2-autocomplete-list-get';

// @ts-ignore
export interface DictionariesGetOkved2AutocompleteListGetParams {
  searchValue: string;
  maxReturnCount: number;
}

export function dictionariesGetOkved2AutocompleteListGetAdapter(params?: DictionariesGetOkved2AutocompleteListGetParams): DictionariesGetOkved2AutocompleteListGet$Params {
  if (!params) {
    return {} as DictionariesGetOkved2AutocompleteListGet$Params;
  }
  return {
      searchValue: params.searchValue,
      maxReturnCount: params.maxReturnCount,
  };
}
