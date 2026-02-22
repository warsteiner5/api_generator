import { OffersChechActualizationRequestExtists$Params } from '../../../swagger/fn/offers/offers-chech-actualization-request-extists';

// @ts-ignore
export interface OffersChechActualizationRequestExtistsParams {
  id: number;
}

export function offersChechActualizationRequestExtistsAdapter(params?: OffersChechActualizationRequestExtistsParams): OffersChechActualizationRequestExtists$Params {
  if (!params) {
    return {} as OffersChechActualizationRequestExtists$Params;
  }
  return {
      id: params.id,
  };
}
