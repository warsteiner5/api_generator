import { DealsAddDealProvisionBySupplier$Params } from '../../../swagger/fn/deals/deals-add-deal-provision-by-supplier';
import { SupplierAddDealProvisionRequestAlt } from '../../models/supplier-add-deal-provision-request-alt.interface';
import { adaptApiSupplierAddDealProvisionRequestAltDto } from '../../adapters/toDto/api-supplier-add-deal-provision-request.adapter';

export interface DealsAddDealProvisionBySupplierParams {
  id: number;
  body?: SupplierAddDealProvisionRequestAlt;
}

export const dealsAddDealProvisionBySupplierParamsAdapter = {
  adapt(params?: DealsAddDealProvisionBySupplierParams): DealsAddDealProvisionBySupplier$Params {
    if (!params) {
      return {} as DealsAddDealProvisionBySupplier$Params;
    }
    return {
      id: params.id,
      body: adaptApiSupplierAddDealProvisionRequestAltDto(params.body),
    };
  }
};
