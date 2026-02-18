import { OffersDisapprove$Params } from '../../../swagger/fn/offers/offers-disapprove';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersDisapproveParams {
  body?: SearchObjectAlt;
}

export const offersDisapproveParamsAdapter = {
  adapt(params?: OffersDisapproveParams): OffersDisapprove$Params {
    if (!params) {
      return {} as OffersDisapprove$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
