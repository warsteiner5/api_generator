import { ExternalOrderRequestAlt } from '../../models/external-order-request-alt.interface';
import { OrdersCreateByExternalSystem$Params } from '../../../swagger/fn/orders/orders-create-by-external-system';
import { apiExternalOrderRequestAltDtoAdapter } from '../../adapters/models/api-external-order-request.adapter';

// @ts-ignore
export interface OrdersCreateByExternalSystemParams {
  body?: ExternalOrderRequestAlt;
}

export function ordersCreateByExternalSystemAdapter(params?: OrdersCreateByExternalSystemParams): OrdersCreateByExternalSystem$Params {
  if (!params) {
    return {} as OrdersCreateByExternalSystem$Params;
  }
  return {
      body: apiExternalOrderRequestAltDtoAdapter(params.body),
  };
}
