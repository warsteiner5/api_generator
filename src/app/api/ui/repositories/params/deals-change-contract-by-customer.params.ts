import { ChangeContractByCustomerRequestAlt } from '../../models/change-contract-by-customer-request-alt.interface';
import { DealsChangeContractByCustomer$Params } from '../../../swagger/fn/deals/deals-change-contract-by-customer';
import { apiChangeContractByCustomerRequestAltDtoAdapter } from '../../adapters/models/api-change-contract-by-customer-request.adapter';

// @ts-ignore
export interface DealsChangeContractByCustomerParams {
  id: number;
  body?: ChangeContractByCustomerRequestAlt;
}

export function dealsChangeContractByCustomerAdapter(params?: DealsChangeContractByCustomerParams): DealsChangeContractByCustomer$Params {
  if (!params) {
    return {} as DealsChangeContractByCustomer$Params;
  }
  return {
      id: params.id,
      body: apiChangeContractByCustomerRequestAltDtoAdapter(params.body),
  };
}
