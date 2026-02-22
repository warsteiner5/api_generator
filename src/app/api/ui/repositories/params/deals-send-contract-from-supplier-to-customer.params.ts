import { DealsSendContractFromSupplierToCustomer$Params } from '../../../swagger/fn/deals/deals-send-contract-from-supplier-to-customer';
import { SendContractFromSupplierToCustomerRequestAlt } from '../../models/send-contract-from-supplier-to-customer-request-alt.interface';
import { apiSendContractFromSupplierToCustomerRequestAltDtoAdapter } from '../../adapters/models/api-send-contract-from-supplier-to-customer-request.adapter';

// @ts-ignore
export interface DealsSendContractFromSupplierToCustomerParams {
  id: number;
  body?: SendContractFromSupplierToCustomerRequestAlt;
}

export function dealsSendContractFromSupplierToCustomerAdapter(params?: DealsSendContractFromSupplierToCustomerParams): DealsSendContractFromSupplierToCustomer$Params {
  if (!params) {
    return {} as DealsSendContractFromSupplierToCustomer$Params;
  }
  return {
      id: params.id,
      body: apiSendContractFromSupplierToCustomerRequestAltDtoAdapter(params.body),
  };
}
