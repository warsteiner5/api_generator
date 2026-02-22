import { ApiSendContractFromCustomerToSupplierRequestAltDto } from '../../../swagger/models/api-send-contract-from-customer-to-supplier-request';
import { SendContractFromCustomerToSupplierRequestAlt } from '../../models/send-contract-from-customer-to-supplier-request-alt.interface';

export const sendContractFromCustomerToSupplierRequestAltAdapter = (source?: ApiSendContractFromCustomerToSupplierRequestAltDto | null): SendContractFromCustomerToSupplierRequestAlt => {
  return {
    contractExecutionDate: source?.ContractExecutionDate,
    contractGuaranteeRequired: source?.ContractGuaranteeRequired,
    contractPrice: source?.ContractPrice,
    dealNumber: source?.DealNumber,
    fileGuids: source?.FileGuids,
  };
}
