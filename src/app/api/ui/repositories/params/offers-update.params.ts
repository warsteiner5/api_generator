import { BatchUpdateModelAlt } from '../../models/batch-update-model-alt.interface';
import { OffersUpdate$Params } from '../../../swagger/fn/offers/offers-update';
import { apiBatchUpdateModelAltDtoAdapter } from '../../adapters/models/api-batch-update-model.adapter';

// @ts-ignore
export interface OffersUpdateParams {
  body?: BatchUpdateModelAlt;
}

export function offersUpdateAdapter(params?: OffersUpdateParams): OffersUpdate$Params {
  if (!params) {
    return {} as OffersUpdate$Params;
  }
  return {
      body: apiBatchUpdateModelAltDtoAdapter(params.body),
  };
}
