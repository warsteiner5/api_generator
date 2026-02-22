import { StopListItem } from '../../models/stop-list-item.interface';
import { StopListItemBanSupplier$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-ban-supplier';
import { apiStopListItemDtoAdapter } from '../../adapters/models/api-stop-list-item-dto.adapter';

// @ts-ignore
export interface StopListItemBanSupplierParams {
  body?: StopListItem;
}

export function stopListItemBanSupplierAdapter(params?: StopListItemBanSupplierParams): StopListItemBanSupplier$Params {
  if (!params) {
    return {} as StopListItemBanSupplier$Params;
  }
  return {
      body: apiStopListItemDtoAdapter(params.body),
  };
}
