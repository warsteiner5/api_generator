import { StopListItemCheckIfBanned$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-check-if-banned';

export interface StopListItemCheckIfBannedParams {
  supplierId: number;
}

export const stopListItemCheckIfBannedParamsAdapter = {
  adapt(params?: StopListItemCheckIfBannedParams): StopListItemCheckIfBanned$Params {
    if (!params) {
      return {} as StopListItemCheckIfBanned$Params;
    }
    return {
      supplierId: params.supplierId,
    };
  }
};
