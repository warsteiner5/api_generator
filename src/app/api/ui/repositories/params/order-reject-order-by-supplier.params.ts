import { OrderRejectOrderBySupplier$Params } from '../../../swagger/fn/order/order-reject-order-by-supplier';
import { RejectOrderBySupplierModelAlt } from '../../models/reject-order-by-supplier-model-alt.interface';
import { adaptApiRejectOrderBySupplierModelAltDto } from '../../adapters/toDto/api-reject-order-by-supplier-model.adapter';

export interface OrderRejectOrderBySupplierParams {
  body?: RejectOrderBySupplierModelAlt;
}

export const orderRejectOrderBySupplierParamsAdapter = {
  adapt(params?: OrderRejectOrderBySupplierParams): OrderRejectOrderBySupplier$Params {
    if (!params) {
      return {} as OrderRejectOrderBySupplier$Params;
    }
    return {
      body: adaptApiRejectOrderBySupplierModelAltDto(params.body),
    };
  }
};
