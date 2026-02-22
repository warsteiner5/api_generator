import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { OrdersAddAgreementByCustomer$Params } from '../../../swagger/fn/orders/orders-add-agreement-by-customer';
import { apiOrderAgreementAltDtoAdapter } from '../../adapters/models/api-order-agreement.adapter';

// @ts-ignore
export interface OrdersAddAgreementByCustomerParams {
  id: number;
  body?: OrderAgreementAlt;
}

export function ordersAddAgreementByCustomerAdapter(params?: OrdersAddAgreementByCustomerParams): OrdersAddAgreementByCustomer$Params {
  if (!params) {
    return {} as OrdersAddAgreementByCustomer$Params;
  }
  return {
      id: params.id,
      body: apiOrderAgreementAltDtoAdapter(params.body),
  };
}
