import { ChangeContractBySupplierRequestAlt } from '../../models/change-contract-by-supplier-request-alt.interface';
import { DealsChangeContractBySupplier$Params } from '../../../swagger/fn/deals/deals-change-contract-by-supplier';
import { apiChangeContractBySupplierRequestAltDtoAdapter } from '../../adapters/models/api-change-contract-by-supplier-request.adapter';

// @ts-ignore
export interface DealsChangeContractBySupplierParams {
  id: number;
  body?: ChangeContractBySupplierRequestAlt;
}

export function dealsChangeContractBySupplierAdapter(params?: DealsChangeContractBySupplierParams): DealsChangeContractBySupplier$Params {
  if (!params) {
    return {} as DealsChangeContractBySupplier$Params;
  }
  return {
      id: params.id,
      body: apiChangeContractBySupplierRequestAltDtoAdapter(params.body),
  };
}
