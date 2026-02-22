import { SendContractFromCustomerToSupplierRequestAlt } from '../../models/send-contract-from-customer-to-supplier-request-alt.interface';
import { ApiSendContractFromCustomerToSupplierRequestAltDto } from '../../../swagger/models/api-send-contract-from-customer-to-supplier-request';

export const apiSendContractFromCustomerToSupplierRequestAltDtoAdapter = (source?: SendContractFromCustomerToSupplierRequestAlt | null): ApiSendContractFromCustomerToSupplierRequestAltDto => {
  return {
    ContractExecutionDate: source?.contractExecutionDate,
    ContractGuaranteeRequired: source?.contractGuaranteeRequired,
    ContractPrice: source?.contractPrice,
    DealNumber: source?.dealNumber,
    FileGuids: source?.fileGuids,
  };
}
