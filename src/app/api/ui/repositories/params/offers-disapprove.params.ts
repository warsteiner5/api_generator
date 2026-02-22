import { OffersDisapprove$Params } from '../../../swagger/fn/offers/offers-disapprove';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersDisapproveParams {
  body?: SearchObjectAlt;
}

export function offersDisapproveAdapter(params?: OffersDisapproveParams): OffersDisapprove$Params {
  if (!params) {
    return {} as OffersDisapprove$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
