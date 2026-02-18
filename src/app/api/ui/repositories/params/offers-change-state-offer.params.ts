import { ChangeStateOffersModelAlt } from '../../models/change-state-offers-model-alt.interface';
import { OffersChangeStateOffer$Params } from '../../../swagger/fn/offers/offers-change-state-offer';
import { adaptApiChangeStateOffersModelAltDto } from '../../adapters/toDto/api-change-state-offers-model.adapter';

export interface OffersChangeStateOfferParams {
  body?: ChangeStateOffersModelAlt;
}

export const offersChangeStateOfferParamsAdapter = {
  adapt(params?: OffersChangeStateOfferParams): OffersChangeStateOffer$Params {
    if (!params) {
      return {} as OffersChangeStateOffer$Params;
    }
    return {
      body: adaptApiChangeStateOffersModelAltDto(params.body),
    };
  }
};
