import { DictionariesGetOkved2AutocompleteListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okved-2-autocomplete-list-post';
import { Okved2FilterAlt } from '../../models/okved-2-filter-alt.interface';
import { adaptApiOkved2FilterAltDto } from '../../adapters/toDto/api-okved-2-filter.adapter';

export interface DictionariesGetOkved2AutocompleteListPostParams {
  body?: Okved2FilterAlt;
}

export const dictionariesGetOkved2AutocompleteListPostParamsAdapter = {
  adapt(params?: DictionariesGetOkved2AutocompleteListPostParams): DictionariesGetOkved2AutocompleteListPost$Params {
    if (!params) {
      return {} as DictionariesGetOkved2AutocompleteListPost$Params;
    }
    return {
      body: adaptApiOkved2FilterAltDto(params.body),
    };
  }
};
