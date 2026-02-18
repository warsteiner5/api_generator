import { CalculateSumRequestAlt } from '../../models/calculate-sum-request-alt.interface';
import { ItemCalculateSum$Params } from '../../../swagger/fn/item/item-calculate-sum';
import { adaptApiCalculateSumRequestAltDto } from '../../adapters/toDto/api-calculate-sum-request.adapter';

export interface ItemCalculateSumParams {
  body?: CalculateSumRequestAlt;
}

export const itemCalculateSumParamsAdapter = {
  adapt(params?: ItemCalculateSumParams): ItemCalculateSum$Params {
    if (!params) {
      return {} as ItemCalculateSum$Params;
    }
    return {
      body: adaptApiCalculateSumRequestAltDto(params.body),
    };
  }
};
