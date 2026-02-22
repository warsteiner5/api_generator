import { DictionariesGetOkved2AutocompleteListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okved-2-autocomplete-list-post';
import { Okved2FilterAlt } from '../../models/okved-2-filter-alt.interface';
import { apiOkved2FilterAltDtoAdapter } from '../../adapters/models/api-okved-2-filter.adapter';

// @ts-ignore
export interface DictionariesGetOkved2AutocompleteListPostParams {
  body?: Okved2FilterAlt;
}

export function dictionariesGetOkved2AutocompleteListPostAdapter(params?: DictionariesGetOkved2AutocompleteListPostParams): DictionariesGetOkved2AutocompleteListPost$Params {
  if (!params) {
    return {} as DictionariesGetOkved2AutocompleteListPost$Params;
  }
  return {
      body: apiOkved2FilterAltDtoAdapter(params.body),
  };
}
