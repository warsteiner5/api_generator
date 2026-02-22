import { CreateAndConcludeDealNonElectronicFormRequestAlt } from '../../models/create-and-conclude-deal-non-electronic-form-request-alt.interface';
import { OrdersCreateAndConcludeDealNonElectronicForm$Params } from '../../../swagger/fn/orders/orders-create-and-conclude-deal-non-electronic-form';
import { apiCreateAndConcludeDealNonElectronicFormRequestAltDtoAdapter } from '../../adapters/models/api-create-and-conclude-deal-non-electronic-form-request.adapter';

// @ts-ignore
export interface OrdersCreateAndConcludeDealNonElectronicFormParams {
  body?: CreateAndConcludeDealNonElectronicFormRequestAlt;
}

export function ordersCreateAndConcludeDealNonElectronicFormAdapter(params?: OrdersCreateAndConcludeDealNonElectronicFormParams): OrdersCreateAndConcludeDealNonElectronicForm$Params {
  if (!params) {
    return {} as OrdersCreateAndConcludeDealNonElectronicForm$Params;
  }
  return {
      body: apiCreateAndConcludeDealNonElectronicFormRequestAltDtoAdapter(params.body),
  };
}
