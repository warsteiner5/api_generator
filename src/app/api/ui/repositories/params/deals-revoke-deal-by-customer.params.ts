import { DealsRevokeDealByCustomer$Params } from '../../../swagger/fn/deals/deals-revoke-deal-by-customer';
import { RevokeDealByCustomerRequestAlt } from '../../models/revoke-deal-by-customer-request-alt.interface';
import { adaptApiRevokeDealByCustomerRequestAltDto } from '../../adapters/toDto/api-revoke-deal-by-customer-request.adapter';

export interface DealsRevokeDealByCustomerParams {
  id: number;
  body?: RevokeDealByCustomerRequestAlt;
}

export const dealsRevokeDealByCustomerParamsAdapter = {
  adapt(params?: DealsRevokeDealByCustomerParams): DealsRevokeDealByCustomer$Params {
    if (!params) {
      return {} as DealsRevokeDealByCustomer$Params;
    }
    return {
      id: params.id,
      body: adaptApiRevokeDealByCustomerRequestAltDto(params.body),
    };
  }
};
