import { CanCreateFromNotTookPlaceTradeValidation } from '../../models/can-create-from-not-took-place-trade-validation.interface';
import { TradesNotTookPlaceValidateCanCreateChildTrade$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-validate-can-create-child-trade';
import { apiCanCreateFromNotTookPlaceTradeValidationDtoAdapter } from '../../adapters/models/api-can-create-from-not-took-place-trade-validation-dto.adapter';

// @ts-ignore
export interface TradesNotTookPlaceValidateCanCreateChildTradeParams {
  body?: CanCreateFromNotTookPlaceTradeValidation;
}

export function tradesNotTookPlaceValidateCanCreateChildTradeAdapter(params?: TradesNotTookPlaceValidateCanCreateChildTradeParams): TradesNotTookPlaceValidateCanCreateChildTrade$Params {
  if (!params) {
    return {} as TradesNotTookPlaceValidateCanCreateChildTrade$Params;
  }
  return {
      body: apiCanCreateFromNotTookPlaceTradeValidationDtoAdapter(params.body),
  };
}
