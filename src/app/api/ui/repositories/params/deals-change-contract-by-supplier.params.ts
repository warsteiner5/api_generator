import { ChangeContractBySupplierRequestAlt } from '../../models/change-contract-by-supplier-request-alt.interface';
import { DealsChangeContractBySupplier$Params } from '../../../swagger/fn/deals/deals-change-contract-by-supplier';
import { adaptApiChangeContractBySupplierRequestAltDto } from '../../adapters/toDto/api-change-contract-by-supplier-request.adapter';

export interface DealsChangeContractBySupplierParams {
  id: number;
  body?: ChangeContractBySupplierRequestAlt;
}

export const dealsChangeContractBySupplierParamsAdapter = {
  adapt(params?: DealsChangeContractBySupplierParams): DealsChangeContractBySupplier$Params {
    if (!params) {
      return {} as DealsChangeContractBySupplier$Params;
    }
    return {
      id: params.id,
      body: adaptApiChangeContractBySupplierRequestAltDto(params.body),
    };
  }
};
