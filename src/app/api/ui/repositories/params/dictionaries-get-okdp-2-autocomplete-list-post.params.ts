import { DictionariesGetOkdp2AutocompleteListPost$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-post';
import { Okpd2FilterAlt } from '../../models/okpd-2-filter-alt.interface';
import { apiOkpd2FilterAltDtoAdapter } from '../../adapters/models/api-okpd-2-filter.adapter';

// @ts-ignore
export interface DictionariesGetOkdp2AutocompleteListPostParams {
  body?: Okpd2FilterAlt;
}

export function dictionariesGetOkdp2AutocompleteListPostAdapter(params?: DictionariesGetOkdp2AutocompleteListPostParams): DictionariesGetOkdp2AutocompleteListPost$Params {
  if (!params) {
    return {} as DictionariesGetOkdp2AutocompleteListPost$Params;
  }
  return {
      body: apiOkpd2FilterAltDtoAdapter(params.body),
  };
}
