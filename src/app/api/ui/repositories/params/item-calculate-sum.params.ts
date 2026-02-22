import { CalculateSumRequestAlt } from '../../models/calculate-sum-request-alt.interface';
import { ItemCalculateSum$Params } from '../../../swagger/fn/item/item-calculate-sum';
import { apiCalculateSumRequestAltDtoAdapter } from '../../adapters/models/api-calculate-sum-request.adapter';

// @ts-ignore
export interface ItemCalculateSumParams {
  body?: CalculateSumRequestAlt;
}

export function itemCalculateSumAdapter(params?: ItemCalculateSumParams): ItemCalculateSum$Params {
  if (!params) {
    return {} as ItemCalculateSum$Params;
  }
  return {
      body: apiCalculateSumRequestAltDtoAdapter(params.body),
  };
}
