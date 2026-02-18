import { StopListItemUnbanSupplier$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-unban-supplier';

export interface StopListItemUnbanSupplierParams {
  stopListItemId: number;
  unbanReason: string;
}

export const stopListItemUnbanSupplierParamsAdapter = {
  adapt(params?: StopListItemUnbanSupplierParams): StopListItemUnbanSupplier$Params {
    if (!params) {
      return {} as StopListItemUnbanSupplier$Params;
    }
    return {
      stopListItemId: params.stopListItemId,
      unbanReason: params.unbanReason,
    };
  }
};
