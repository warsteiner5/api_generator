import { DealsSendContractFromCustomerToSupplier$Params } from '../../../swagger/fn/deals/deals-send-contract-from-customer-to-supplier';
import { SendContractFromCustomerToSupplierRequestAlt } from '../../models/send-contract-from-customer-to-supplier-request-alt.interface';
import { adaptApiSendContractFromCustomerToSupplierRequestAltDto } from '../../adapters/toDto/api-send-contract-from-customer-to-supplier-request.adapter';

export interface DealsSendContractFromCustomerToSupplierParams {
  id: number;
  body?: SendContractFromCustomerToSupplierRequestAlt;
}

export const dealsSendContractFromCustomerToSupplierParamsAdapter = {
  adapt(params?: DealsSendContractFromCustomerToSupplierParams): DealsSendContractFromCustomerToSupplier$Params {
    if (!params) {
      return {} as DealsSendContractFromCustomerToSupplier$Params;
    }
    return {
      id: params.id,
      body: adaptApiSendContractFromCustomerToSupplierRequestAltDto(params.body),
    };
  }
};
