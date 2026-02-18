import { DealsSendContractFromSupplierToCustomer$Params } from '../../../swagger/fn/deals/deals-send-contract-from-supplier-to-customer';
import { SendContractFromSupplierToCustomerRequestAlt } from '../../models/send-contract-from-supplier-to-customer-request-alt.interface';
import { adaptApiSendContractFromSupplierToCustomerRequestAltDto } from '../../adapters/toDto/api-send-contract-from-supplier-to-customer-request.adapter';

export interface DealsSendContractFromSupplierToCustomerParams {
  id: number;
  body?: SendContractFromSupplierToCustomerRequestAlt;
}

export const dealsSendContractFromSupplierToCustomerParamsAdapter = {
  adapt(params?: DealsSendContractFromSupplierToCustomerParams): DealsSendContractFromSupplierToCustomer$Params {
    if (!params) {
      return {} as DealsSendContractFromSupplierToCustomer$Params;
    }
    return {
      id: params.id,
      body: adaptApiSendContractFromSupplierToCustomerRequestAltDto(params.body),
    };
  }
};
