import { StopListItemUnbanSupplier$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-unban-supplier';

// @ts-ignore
export interface StopListItemUnbanSupplierParams {
  stopListItemId: number;
  unbanReason: string;
}

export function stopListItemUnbanSupplierAdapter(params?: StopListItemUnbanSupplierParams): StopListItemUnbanSupplier$Params {
  if (!params) {
    return {} as StopListItemUnbanSupplier$Params;
  }
  return {
      stopListItemId: params.stopListItemId,
      unbanReason: params.unbanReason,
  };
}
