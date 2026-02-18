import { CreateAndConcludeDealNonElectronicFormRequestAlt } from '../../models/create-and-conclude-deal-non-electronic-form-request-alt.interface';
import { OrdersCreateAndConcludeDealNonElectronicForm$Params } from '../../../swagger/fn/orders/orders-create-and-conclude-deal-non-electronic-form';
import { adaptApiCreateAndConcludeDealNonElectronicFormRequestAltDto } from '../../adapters/toDto/api-create-and-conclude-deal-non-electronic-form-request.adapter';

export interface OrdersCreateAndConcludeDealNonElectronicFormParams {
  body?: CreateAndConcludeDealNonElectronicFormRequestAlt;
}

export const ordersCreateAndConcludeDealNonElectronicFormParamsAdapter = {
  adapt(params?: OrdersCreateAndConcludeDealNonElectronicFormParams): OrdersCreateAndConcludeDealNonElectronicForm$Params {
    if (!params) {
      return {} as OrdersCreateAndConcludeDealNonElectronicForm$Params;
    }
    return {
      body: adaptApiCreateAndConcludeDealNonElectronicFormRequestAltDto(params.body),
    };
  }
};
