import { ExternalOrderRequestAlt } from '../../models/external-order-request-alt.interface';
import { OrdersCreateByExternalSystem$Params } from '../../../swagger/fn/orders/orders-create-by-external-system';
import { adaptApiExternalOrderRequestAltDto } from '../../adapters/toDto/api-external-order-request.adapter';

export interface OrdersCreateByExternalSystemParams {
  body?: ExternalOrderRequestAlt;
}

export const ordersCreateByExternalSystemParamsAdapter = {
  adapt(params?: OrdersCreateByExternalSystemParams): OrdersCreateByExternalSystem$Params {
    if (!params) {
      return {} as OrdersCreateByExternalSystem$Params;
    }
    return {
      body: adaptApiExternalOrderRequestAltDto(params.body),
    };
  }
};
