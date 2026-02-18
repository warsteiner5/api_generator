import { Order } from '../../models/order.interface';
import { OrderSaveAsDraft$Params } from '../../../swagger/fn/order/order-save-as-draft';
import { adaptApiOrderDto } from '../../adapters/toDto/api-order-dto.adapter';

export interface OrderSaveAsDraftParams {
  body?: Order;
}

export const orderSaveAsDraftParamsAdapter = {
  adapt(params?: OrderSaveAsDraftParams): OrderSaveAsDraft$Params {
    if (!params) {
      return {} as OrderSaveAsDraft$Params;
    }
    return {
      body: adaptApiOrderDto(params.body),
    };
  }
};
