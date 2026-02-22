import { ApiChangeContractByCustomerRequestAltDto } from '../../../swagger/models/api-change-contract-by-customer-request';
import { ChangeContractByCustomerRequestAlt } from '../../models/change-contract-by-customer-request-alt.interface';

export const changeContractByCustomerRequestAltAdapter = (source?: ApiChangeContractByCustomerRequestAltDto | null): ChangeContractByCustomerRequestAlt => {
  return {
    contractExecutionDate: source?.ContractExecutionDate,
    contractPrice: source?.ContractPrice,
    fileGuids: source?.FileGuids,
  };
}
