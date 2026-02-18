import { CreateApplicationsByCustomerBindingModelAlt } from '../../models/create-applications-by-customer-binding-model-alt.interface';
import { TradeCreateApplicationsByCustomer$Params } from '../../../swagger/fn/trade/trade-create-applications-by-customer';
import { adaptApiCreateApplicationsByCustomerBindingModelAltDto } from '../../adapters/toDto/api-create-applications-by-customer-binding-model.adapter';

export interface TradeCreateApplicationsByCustomerParams {
  id: number;
  body?: CreateApplicationsByCustomerBindingModelAlt;
}

export const tradeCreateApplicationsByCustomerParamsAdapter = {
  adapt(params?: TradeCreateApplicationsByCustomerParams): TradeCreateApplicationsByCustomer$Params {
    if (!params) {
      return {} as TradeCreateApplicationsByCustomer$Params;
    }
    return {
      id: params.id,
      body: adaptApiCreateApplicationsByCustomerBindingModelAltDto(params.body),
    };
  }
};
