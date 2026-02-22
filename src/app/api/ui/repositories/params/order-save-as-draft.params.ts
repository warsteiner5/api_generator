import { Order } from '../../models/order.interface';
import { OrderSaveAsDraft$Params } from '../../../swagger/fn/order/order-save-as-draft';
import { apiOrderDtoAdapter } from '../../adapters/models/api-order-dto.adapter';

// @ts-ignore
export interface OrderSaveAsDraftParams {
  body?: Order;
}

export function orderSaveAsDraftAdapter(params?: OrderSaveAsDraftParams): OrderSaveAsDraft$Params {
  if (!params) {
    return {} as OrderSaveAsDraft$Params;
  }
  return {
      body: apiOrderDtoAdapter(params.body),
  };
}
