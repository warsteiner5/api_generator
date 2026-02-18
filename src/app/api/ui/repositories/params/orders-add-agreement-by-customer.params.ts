import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { OrdersAddAgreementByCustomer$Params } from '../../../swagger/fn/orders/orders-add-agreement-by-customer';
import { adaptApiOrderAgreementAltDto } from '../../adapters/toDto/api-order-agreement.adapter';

export interface OrdersAddAgreementByCustomerParams {
  id: number;
  body?: OrderAgreementAlt;
}

export const ordersAddAgreementByCustomerParamsAdapter = {
  adapt(params?: OrdersAddAgreementByCustomerParams): OrdersAddAgreementByCustomer$Params {
    if (!params) {
      return {} as OrdersAddAgreementByCustomer$Params;
    }
    return {
      id: params.id,
      body: adaptApiOrderAgreementAltDto(params.body),
    };
  }
};
