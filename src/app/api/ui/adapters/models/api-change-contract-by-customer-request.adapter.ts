import { ChangeContractByCustomerRequestAlt } from '../../models/change-contract-by-customer-request-alt.interface';
import { ApiChangeContractByCustomerRequestAltDto } from '../../../swagger/models/api-change-contract-by-customer-request';

export const apiChangeContractByCustomerRequestAltDtoAdapter = (source?: ChangeContractByCustomerRequestAlt | null): ApiChangeContractByCustomerRequestAltDto => {
  return {
    ContractExecutionDate: source?.contractExecutionDate,
    ContractPrice: source?.contractPrice,
    FileGuids: source?.fileGuids,
  };
}
