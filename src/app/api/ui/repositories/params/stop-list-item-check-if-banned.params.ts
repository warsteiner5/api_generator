import { StopListItemCheckIfBanned$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-check-if-banned';

// @ts-ignore
export interface StopListItemCheckIfBannedParams {
  supplierId: number;
}

export function stopListItemCheckIfBannedAdapter(params?: StopListItemCheckIfBannedParams): StopListItemCheckIfBanned$Params {
  if (!params) {
    return {} as StopListItemCheckIfBanned$Params;
  }
  return {
      supplierId: params.supplierId,
  };
}
