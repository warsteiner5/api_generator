import { OffersSearch$Params } from '../../../swagger/fn/offers/offers-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersSearchParams {
  body?: SearchObjectAlt;
}

export const offersSearchParamsAdapter = {
  adapt(params?: OffersSearchParams): OffersSearch$Params {
    if (!params) {
      return {} as OffersSearch$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
