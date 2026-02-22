import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';
import { StopListItemGetPaginateStopListItemExtetndeds$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-get-paginate-stop-list-item-extetndeds';
import { apiStopListItemFilterAltDtoAdapter } from '../../adapters/models/api-stop-list-item-filter.adapter';

// @ts-ignore
export interface StopListItemGetPaginateStopListItemExtetndedsParams {
  body?: StopListItemFilterAlt;
}

export function stopListItemGetPaginateStopListItemExtetndedsAdapter(params?: StopListItemGetPaginateStopListItemExtetndedsParams): StopListItemGetPaginateStopListItemExtetndeds$Params {
  if (!params) {
    return {} as StopListItemGetPaginateStopListItemExtetndeds$Params;
  }
  return {
      body: apiStopListItemFilterAltDtoAdapter(params.body),
  };
}
