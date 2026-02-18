import { OffersModerate$Params } from '../../../swagger/fn/offers/offers-moderate';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersModerateParams {
  body?: SearchObjectAlt;
}

export const offersModerateParamsAdapter = {
  adapt(params?: OffersModerateParams): OffersModerate$Params {
    if (!params) {
      return {} as OffersModerate$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
