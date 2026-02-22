import { SendContractFromSupplierToCustomerRequestAlt } from '../../models/send-contract-from-supplier-to-customer-request-alt.interface';
import { ApiSendContractFromSupplierToCustomerRequestAltDto } from '../../../swagger/models/api-send-contract-from-supplier-to-customer-request';

export const apiSendContractFromSupplierToCustomerRequestAltDtoAdapter = (source?: SendContractFromSupplierToCustomerRequestAlt | null): ApiSendContractFromSupplierToCustomerRequestAltDto => {
  return {
    FileGuids: source?.fileGuids,
  };
}
