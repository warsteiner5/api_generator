import { CanCreateFromNotTookPlaceTradeValidation } from '../../models/can-create-from-not-took-place-trade-validation.interface';
import { TradesNotTookPlaceValidateCartCanCreateChildTrade$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-validate-cart-can-create-child-trade';
import { adaptApiCanCreateFromNotTookPlaceTradeValidationDto } from '../../adapters/toDto/api-can-create-from-not-took-place-trade-validation-dto.adapter';

export interface TradesNotTookPlaceValidateCartCanCreateChildTradeParams {
  body?: CanCreateFromNotTookPlaceTradeValidation;
}

export const tradesNotTookPlaceValidateCartCanCreateChildTradeParamsAdapter = {
  adapt(params?: TradesNotTookPlaceValidateCartCanCreateChildTradeParams): TradesNotTookPlaceValidateCartCanCreateChildTrade$Params {
    if (!params) {
      return {} as TradesNotTookPlaceValidateCartCanCreateChildTrade$Params;
    }
    return {
      body: adaptApiCanCreateFromNotTookPlaceTradeValidationDto(params.body),
    };
  }
};
