import { OrderRejectOrderBySupplier$Params } from '../../../swagger/fn/order/order-reject-order-by-supplier';
import { RejectOrderBySupplierModelAlt } from '../../models/reject-order-by-supplier-model-alt.interface';
import { apiRejectOrderBySupplierModelAltDtoAdapter } from '../../adapters/models/api-reject-order-by-supplier-model.adapter';

// @ts-ignore
export interface OrderRejectOrderBySupplierParams {
  body?: RejectOrderBySupplierModelAlt;
}

export function orderRejectOrderBySupplierAdapter(params?: OrderRejectOrderBySupplierParams): OrderRejectOrderBySupplier$Params {
  if (!params) {
    return {} as OrderRejectOrderBySupplier$Params;
  }
  return {
      body: apiRejectOrderBySupplierModelAltDtoAdapter(params.body),
  };
}
