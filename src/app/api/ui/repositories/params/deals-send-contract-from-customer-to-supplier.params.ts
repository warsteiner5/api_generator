import { DealsSendContractFromCustomerToSupplier$Params } from '../../../swagger/fn/deals/deals-send-contract-from-customer-to-supplier';
import { SendContractFromCustomerToSupplierRequestAlt } from '../../models/send-contract-from-customer-to-supplier-request-alt.interface';
import { apiSendContractFromCustomerToSupplierRequestAltDtoAdapter } from '../../adapters/models/api-send-contract-from-customer-to-supplier-request.adapter';

// @ts-ignore
export interface DealsSendContractFromCustomerToSupplierParams {
  id: number;
  body?: SendContractFromCustomerToSupplierRequestAlt;
}

export function dealsSendContractFromCustomerToSupplierAdapter(params?: DealsSendContractFromCustomerToSupplierParams): DealsSendContractFromCustomerToSupplier$Params {
  if (!params) {
    return {} as DealsSendContractFromCustomerToSupplier$Params;
  }
  return {
      id: params.id,
      body: apiSendContractFromCustomerToSupplierRequestAltDtoAdapter(params.body),
  };
}
