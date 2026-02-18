import { OffersChechActualizationRequestExtists$Params } from '../../../swagger/fn/offers/offers-chech-actualization-request-extists';

export interface OffersChechActualizationRequestExtistsParams {
  id: number;
}

export const offersChechActualizationRequestExtistsParamsAdapter = {
  adapt(params?: OffersChechActualizationRequestExtistsParams): OffersChechActualizationRequestExtists$Params {
    if (!params) {
      return {} as OffersChechActualizationRequestExtists$Params;
    }
    return {
      id: params.id,
    };
  }
};
