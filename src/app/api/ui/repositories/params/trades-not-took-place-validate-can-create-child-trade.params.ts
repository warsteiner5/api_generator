import { CanCreateFromNotTookPlaceTradeValidation } from '../../models/can-create-from-not-took-place-trade-validation.interface';
import { TradesNotTookPlaceValidateCanCreateChildTrade$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-validate-can-create-child-trade';
import { adaptApiCanCreateFromNotTookPlaceTradeValidationDto } from '../../adapters/toDto/api-can-create-from-not-took-place-trade-validation-dto.adapter';

export interface TradesNotTookPlaceValidateCanCreateChildTradeParams {
  body?: CanCreateFromNotTookPlaceTradeValidation;
}

export const tradesNotTookPlaceValidateCanCreateChildTradeParamsAdapter = {
  adapt(params?: TradesNotTookPlaceValidateCanCreateChildTradeParams): TradesNotTookPlaceValidateCanCreateChildTrade$Params {
    if (!params) {
      return {} as TradesNotTookPlaceValidateCanCreateChildTrade$Params;
    }
    return {
      body: adaptApiCanCreateFromNotTookPlaceTradeValidationDto(params.body),
    };
  }
};
