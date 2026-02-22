import { DictionariesGetOkdp2AutocompleteListGet$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-get';

// @ts-ignore
export interface DictionariesGetOkdp2AutocompleteListGetParams {
  searchValue: string;
  maxReturnCount: number;
}

export function dictionariesGetOkdp2AutocompleteListGetAdapter(params?: DictionariesGetOkdp2AutocompleteListGetParams): DictionariesGetOkdp2AutocompleteListGet$Params {
  if (!params) {
    return {} as DictionariesGetOkdp2AutocompleteListGet$Params;
  }
  return {
      searchValue: params.searchValue,
      maxReturnCount: params.maxReturnCount,
  };
}
