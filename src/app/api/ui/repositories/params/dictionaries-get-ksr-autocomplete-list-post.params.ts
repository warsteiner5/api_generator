import { DictionariesGetKsrAutocompleteListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ksr-autocomplete-list-post';
import { KsrFilterAlt } from '../../models/ksr-filter-alt.interface';
import { adaptApiKsrFilterAltDto } from '../../adapters/toDto/api-ksr-filter.adapter';

export interface DictionariesGetKsrAutocompleteListPostParams {
  body?: KsrFilterAlt;
}

export const dictionariesGetKsrAutocompleteListPostParamsAdapter = {
  adapt(params?: DictionariesGetKsrAutocompleteListPostParams): DictionariesGetKsrAutocompleteListPost$Params {
    if (!params) {
      return {} as DictionariesGetKsrAutocompleteListPost$Params;
    }
    return {
      body: adaptApiKsrFilterAltDto(params.body),
    };
  }
};
