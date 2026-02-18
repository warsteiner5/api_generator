import { OrderRemoveDraft$Params } from '../../../swagger/fn/order/order-remove-draft';

export interface OrderRemoveDraftParams {
  id: number;
}

export const orderRemoveDraftParamsAdapter = {
  adapt(params?: OrderRemoveDraftParams): OrderRemoveDraft$Params {
    if (!params) {
      return {} as OrderRemoveDraft$Params;
    }
    return {
      id: params.id,
    };
  }
};
