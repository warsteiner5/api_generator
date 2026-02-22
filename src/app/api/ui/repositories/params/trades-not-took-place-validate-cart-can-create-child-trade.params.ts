import { CanCreateFromNotTookPlaceTradeValidation } from '../../models/can-create-from-not-took-place-trade-validation.interface';
import { TradesNotTookPlaceValidateCartCanCreateChildTrade$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-validate-cart-can-create-child-trade';
import { apiCanCreateFromNotTookPlaceTradeValidationDtoAdapter } from '../../adapters/models/api-can-create-from-not-took-place-trade-validation-dto.adapter';

// @ts-ignore
export interface TradesNotTookPlaceValidateCartCanCreateChildTradeParams {
  body?: CanCreateFromNotTookPlaceTradeValidation;
}

export function tradesNotTookPlaceValidateCartCanCreateChildTradeAdapter(params?: TradesNotTookPlaceValidateCartCanCreateChildTradeParams): TradesNotTookPlaceValidateCartCanCreateChildTrade$Params {
  if (!params) {
    return {} as TradesNotTookPlaceValidateCartCanCreateChildTrade$Params;
  }
  return {
      body: apiCanCreateFromNotTookPlaceTradeValidationDtoAdapter(params.body),
  };
}
