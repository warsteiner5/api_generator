import { DictionariesGetOkdp2AutocompleteListGet$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-get';

export interface DictionariesGetOkdp2AutocompleteListGetParams {
  searchValue: string;
  maxReturnCount: number;
}

export const dictionariesGetOkdp2AutocompleteListGetParamsAdapter = {
  adapt(params?: DictionariesGetOkdp2AutocompleteListGetParams): DictionariesGetOkdp2AutocompleteListGet$Params {
    if (!params) {
      return {} as DictionariesGetOkdp2AutocompleteListGet$Params;
    }
    return {
      searchValue: params.searchValue,
      maxReturnCount: params.maxReturnCount,
    };
  }
};
