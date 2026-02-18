import { OffersCount$Params } from '../../../swagger/fn/offers/offers-count';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersCountParams {
  body?: SearchObjectAlt;
}

export const offersCountParamsAdapter = {
  adapt(params?: OffersCountParams): OffersCount$Params {
    if (!params) {
      return {} as OffersCount$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
