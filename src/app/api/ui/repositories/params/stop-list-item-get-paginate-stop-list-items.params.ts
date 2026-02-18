import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';
import { StopListItemGetPaginateStopListItems$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-get-paginate-stop-list-items';
import { adaptApiStopListItemFilterAltDto } from '../../adapters/toDto/api-stop-list-item-filter.adapter';

export interface StopListItemGetPaginateStopListItemsParams {
  body?: StopListItemFilterAlt;
}

export const stopListItemGetPaginateStopListItemsParamsAdapter = {
  adapt(params?: StopListItemGetPaginateStopListItemsParams): StopListItemGetPaginateStopListItems$Params {
    if (!params) {
      return {} as StopListItemGetPaginateStopListItems$Params;
    }
    return {
      body: adaptApiStopListItemFilterAltDto(params.body),
    };
  }
};
