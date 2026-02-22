import { ApiSendContractFromSupplierToCustomerRequestAltDto } from '../../../swagger/models/api-send-contract-from-supplier-to-customer-request';
import { SendContractFromSupplierToCustomerRequestAlt } from '../../models/send-contract-from-supplier-to-customer-request-alt.interface';

export const sendContractFromSupplierToCustomerRequestAltAdapter = (source?: ApiSendContractFromSupplierToCustomerRequestAltDto | null): SendContractFromSupplierToCustomerRequestAlt => {
  return {
    fileGuids: source?.FileGuids,
  };
}
