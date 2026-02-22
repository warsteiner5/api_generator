import { OffersApprove$Params } from '../../../swagger/fn/offers/offers-approve';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface OffersApproveParams {
  body?: SearchObjectAlt;
}

export function offersApproveAdapter(params?: OffersApproveParams): OffersApprove$Params {
  if (!params) {
    return {} as OffersApprove$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
