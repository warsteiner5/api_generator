import { CreateApplicationsByCustomerBindingModelAlt } from '../../models/create-applications-by-customer-binding-model-alt.interface';
import { TradeCreateApplicationsByCustomer$Params } from '../../../swagger/fn/trade/trade-create-applications-by-customer';
import { apiCreateApplicationsByCustomerBindingModelAltDtoAdapter } from '../../adapters/models/api-create-applications-by-customer-binding-model.adapter';

// @ts-ignore
export interface TradeCreateApplicationsByCustomerParams {
  id: number;
  body?: CreateApplicationsByCustomerBindingModelAlt;
}

export function tradeCreateApplicationsByCustomerAdapter(params?: TradeCreateApplicationsByCustomerParams): TradeCreateApplicationsByCustomer$Params {
  if (!params) {
    return {} as TradeCreateApplicationsByCustomer$Params;
  }
  return {
      id: params.id,
      body: apiCreateApplicationsByCustomerBindingModelAltDtoAdapter(params.body),
  };
}
