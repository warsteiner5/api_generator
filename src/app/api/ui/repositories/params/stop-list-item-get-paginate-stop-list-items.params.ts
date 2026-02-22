import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';
import { StopListItemGetPaginateStopListItems$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-get-paginate-stop-list-items';
import { apiStopListItemFilterAltDtoAdapter } from '../../adapters/models/api-stop-list-item-filter.adapter';

// @ts-ignore
export interface StopListItemGetPaginateStopListItemsParams {
  body?: StopListItemFilterAlt;
}

export function stopListItemGetPaginateStopListItemsAdapter(params?: StopListItemGetPaginateStopListItemsParams): StopListItemGetPaginateStopListItems$Params {
  if (!params) {
    return {} as StopListItemGetPaginateStopListItems$Params;
  }
  return {
      body: apiStopListItemFilterAltDtoAdapter(params.body),
  };
}
