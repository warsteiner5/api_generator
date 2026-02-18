import { ChangeContractByCustomerRequestAlt } from '../../models/change-contract-by-customer-request-alt.interface';
import { DealsChangeContractByCustomer$Params } from '../../../swagger/fn/deals/deals-change-contract-by-customer';
import { adaptApiChangeContractByCustomerRequestAltDto } from '../../adapters/toDto/api-change-contract-by-customer-request.adapter';

export interface DealsChangeContractByCustomerParams {
  id: number;
  body?: ChangeContractByCustomerRequestAlt;
}

export const dealsChangeContractByCustomerParamsAdapter = {
  adapt(params?: DealsChangeContractByCustomerParams): DealsChangeContractByCustomer$Params {
    if (!params) {
      return {} as DealsChangeContractByCustomer$Params;
    }
    return {
      id: params.id,
      body: adaptApiChangeContractByCustomerRequestAltDto(params.body),
    };
  }
};
