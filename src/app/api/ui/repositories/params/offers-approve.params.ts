import { OffersApprove$Params } from '../../../swagger/fn/offers/offers-approve';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface OffersApproveParams {
  body?: SearchObjectAlt;
}

export const offersApproveParamsAdapter = {
  adapt(params?: OffersApproveParams): OffersApprove$Params {
    if (!params) {
      return {} as OffersApprove$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
