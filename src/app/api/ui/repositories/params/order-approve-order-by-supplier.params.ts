import { ApproveOrderBySupplierModelAlt } from '../../models/approve-order-by-supplier-model-alt.interface';
import { OrderApproveOrderBySupplier$Params } from '../../../swagger/fn/order/order-approve-order-by-supplier';
import { adaptApiApproveOrderBySupplierModelAltDto } from '../../adapters/toDto/api-approve-order-by-supplier-model.adapter';

export interface OrderApproveOrderBySupplierParams {
  body?: ApproveOrderBySupplierModelAlt;
}

export const orderApproveOrderBySupplierParamsAdapter = {
  adapt(params?: OrderApproveOrderBySupplierParams): OrderApproveOrderBySupplier$Params {
    if (!params) {
      return {} as OrderApproveOrderBySupplier$Params;
    }
    return {
      body: adaptApiApproveOrderBySupplierModelAltDto(params.body),
    };
  }
};
