import { BatchUpdateModelAlt } from '../../models/batch-update-model-alt.interface';
import { OffersUpdate$Params } from '../../../swagger/fn/offers/offers-update';
import { adaptApiBatchUpdateModelAltDto } from '../../adapters/toDto/api-batch-update-model.adapter';

export interface OffersUpdateParams {
  body?: BatchUpdateModelAlt;
}

export const offersUpdateParamsAdapter = {
  adapt(params?: OffersUpdateParams): OffersUpdate$Params {
    if (!params) {
      return {} as OffersUpdate$Params;
    }
    return {
      body: adaptApiBatchUpdateModelAltDto(params.body),
    };
  }
};
