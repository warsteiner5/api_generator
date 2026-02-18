import { OffersGetOffers$Params } from '../../../swagger/fn/offers/offers-get-offers';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersGetOffersParams {
  body?: SearchObjectAlt;
}

export const offersGetOffersParamsAdapter = {
  adapt(params?: OffersGetOffersParams): OffersGetOffers$Params {
    if (!params) {
      return {} as OffersGetOffers$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
