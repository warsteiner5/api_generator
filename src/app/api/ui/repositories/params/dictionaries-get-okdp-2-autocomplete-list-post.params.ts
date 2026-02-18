import { DictionariesGetOkdp2AutocompleteListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-post';
import { Okpd2FilterAlt } from '../../models/okpd-2-filter-alt.interface';
import { adaptApiOkpd2FilterAltDto } from '../../adapters/toDto/api-okpd-2-filter.adapter';

export interface DictionariesGetOkdp2AutocompleteListPostParams {
  body?: Okpd2FilterAlt;
}

export const dictionariesGetOkdp2AutocompleteListPostParamsAdapter = {
  adapt(params?: DictionariesGetOkdp2AutocompleteListPostParams): DictionariesGetOkdp2AutocompleteListPost$Params {
    if (!params) {
      return {} as DictionariesGetOkdp2AutocompleteListPost$Params;
    }
    return {
      body: adaptApiOkpd2FilterAltDto(params.body),
    };
  }
};
