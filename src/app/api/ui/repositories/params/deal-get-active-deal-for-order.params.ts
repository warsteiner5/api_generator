import { DealGetActiveDealForOrder$Params } from '../../../swagger/fn/deal/deal-get-active-deal-for-order';

export interface DealGetActiveDealForOrderParams {
  id: number;
}

export const dealGetActiveDealForOrderParamsAdapter = {
  adapt(params?: DealGetActiveDealForOrderParams): DealGetActiveDealForOrder$Params {
    if (!params) {
      return {} as DealGetActiveDealForOrder$Params;
    }
    return {
      id: params.id,
    };
  }
};
