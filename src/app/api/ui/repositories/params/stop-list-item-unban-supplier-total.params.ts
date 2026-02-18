import { StopListItemUnbanSupplierTotal$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-unban-supplier-total';

export interface StopListItemUnbanSupplierTotalParams {
  supplierId: number;
  body?: string;
}

export const stopListItemUnbanSupplierTotalParamsAdapter = {
  adapt(params?: StopListItemUnbanSupplierTotalParams): StopListItemUnbanSupplierTotal$Params {
    if (!params) {
      return {} as StopListItemUnbanSupplierTotal$Params;
    }
    return {
      supplierId: params.supplierId,
      body: params.body,
    };
  }
};
