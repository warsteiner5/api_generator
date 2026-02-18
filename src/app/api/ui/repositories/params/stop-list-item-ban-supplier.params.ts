import { StopListItem } from '../../models/stop-list-item.interface';
import { StopListItemBanSupplier$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-ban-supplier';
import { adaptApiStopListItemDto } from '../../adapters/toDto/api-stop-list-item-dto.adapter';

export interface StopListItemBanSupplierParams {
  body?: StopListItem;
}

export const stopListItemBanSupplierParamsAdapter = {
  adapt(params?: StopListItemBanSupplierParams): StopListItemBanSupplier$Params {
    if (!params) {
      return {} as StopListItemBanSupplier$Params;
    }
    return {
      body: adaptApiStopListItemDto(params.body),
    };
  }
};
