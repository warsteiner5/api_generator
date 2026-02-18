import { ApiSendContractFromCustomerToSupplierRequestAltDto } from '../../../swagger/models/api-send-contract-from-customer-to-supplier-request';
import { SendContractFromCustomerToSupplierRequestAlt } from '../../models/send-contract-from-customer-to-supplier-request-alt.interface';

export function adaptSendContractFromCustomerToSupplierRequestAltToUI(source?: ApiSendContractFromCustomerToSupplierRequestAltDto | null): SendContractFromCustomerToSupplierRequestAlt {
  return {
    contractExecutionDate: source?.ContractExecutionDate ?? '',
    contractGuaranteeRequired: source?.ContractGuaranteeRequired ?? false,
    contractPrice: source?.ContractPrice ?? 0,
    dealNumber: source?.DealNumber ?? '',
    fileGuids: source?.FileGuids ?? [],
  };
}
