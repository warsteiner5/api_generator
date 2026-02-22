import { DictionariesGetKsrAutocompleteListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-autocomplete-list-post';
import { KsrFilterAlt } from '../../models/ksr-filter-alt.interface';
import { apiKsrFilterAltDtoAdapter } from '../../adapters/models/api-ksr-filter.adapter';

// @ts-ignore
export interface DictionariesGetKsrAutocompleteListPostParams {
  body?: KsrFilterAlt;
}

export function dictionariesGetKsrAutocompleteListPostAdapter(params?: DictionariesGetKsrAutocompleteListPostParams): DictionariesGetKsrAutocompleteListPost$Params {
  if (!params) {
    return {} as DictionariesGetKsrAutocompleteListPost$Params;
  }
  return {
      body: apiKsrFilterAltDtoAdapter(params.body),
  };
}
