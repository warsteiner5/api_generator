import { ApiChangeContractByCustomerRequestAltDto } from '../../../swagger/models/api-change-contract-by-customer-request';
import { ChangeContractByCustomerRequestAlt } from '../../models/change-contract-by-customer-request-alt.interface';

export function adaptChangeContractByCustomerRequestAltToUI(source?: ApiChangeContractByCustomerRequestAltDto | null): ChangeContractByCustomerRequestAlt {
  return {
    contractExecutionDate: source?.ContractExecutionDate ?? '',
    contractPrice: source?.ContractPrice ?? 0,
    fileGuids: source?.FileGuids ?? [],
  };
}
