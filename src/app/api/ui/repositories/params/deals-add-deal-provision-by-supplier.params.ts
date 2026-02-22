import { DealsAddDealProvisionBySupplier$Params } from '../../../swagger/fn/deals/deals-add-deal-provision-by-supplier';
import { SupplierAddDealProvisionRequestAlt } from '../../models/supplier-add-deal-provision-request-alt.interface';
import { apiSupplierAddDealProvisionRequestAltDtoAdapter } from '../../adapters/models/api-supplier-add-deal-provision-request.adapter';

// @ts-ignore
export interface DealsAddDealProvisionBySupplierParams {
  id: number;
  body?: SupplierAddDealProvisionRequestAlt;
}

export function dealsAddDealProvisionBySupplierAdapter(params?: DealsAddDealProvisionBySupplierParams): DealsAddDealProvisionBySupplier$Params {
  if (!params) {
    return {} as DealsAddDealProvisionBySupplier$Params;
  }
  return {
      id: params.id,
      body: apiSupplierAddDealProvisionRequestAltDtoAdapter(params.body),
  };
}
