import { ApproveOrderBySupplierModelAlt } from '../../models/approve-order-by-supplier-model-alt.interface';
import { OrderApproveOrderBySupplier$Params } from '../../../swagger/fn/order/order-approve-order-by-supplier';
import { apiApproveOrderBySupplierModelAltDtoAdapter } from '../../adapters/models/api-approve-order-by-supplier-model.adapter';

// @ts-ignore
export interface OrderApproveOrderBySupplierParams {
  body?: ApproveOrderBySupplierModelAlt;
}

export function orderApproveOrderBySupplierAdapter(params?: OrderApproveOrderBySupplierParams): OrderApproveOrderBySupplier$Params {
  if (!params) {
    return {} as OrderApproveOrderBySupplier$Params;
  }
  return {
      body: apiApproveOrderBySupplierModelAltDtoAdapter(params.body),
  };
}
