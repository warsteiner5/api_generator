import { DealsRevokeDealByCustomer$Params } from '../../../swagger/fn/deals/deals-revoke-deal-by-customer';
import { RevokeDealByCustomerRequestAlt } from '../../models/revoke-deal-by-customer-request-alt.interface';
import { apiRevokeDealByCustomerRequestAltDtoAdapter } from '../../adapters/models/api-revoke-deal-by-customer-request.adapter';

// @ts-ignore
export interface DealsRevokeDealByCustomerParams {
  id: number;
  body?: RevokeDealByCustomerRequestAlt;
}

export function dealsRevokeDealByCustomerAdapter(params?: DealsRevokeDealByCustomerParams): DealsRevokeDealByCustomer$Params {
  if (!params) {
    return {} as DealsRevokeDealByCustomer$Params;
  }
  return {
      id: params.id,
      body: apiRevokeDealByCustomerRequestAltDtoAdapter(params.body),
  };
}
