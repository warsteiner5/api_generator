import { StopListItemFilterAlt } from '../../models/stop-list-item-filter-alt.interface';
import { StopListItemGetPaginateStopListItemExtetndeds$Params } from '../../../swagger/fn/stop-list-item/stop-list-item-get-paginate-stop-list-item-extetndeds';
import { adaptApiStopListItemFilterAltDto } from '../../adapters/toDto/api-stop-list-item-filter.adapter';

export interface StopListItemGetPaginateStopListItemExtetndedsParams {
  body?: StopListItemFilterAlt;
}

export const stopListItemGetPaginateStopListItemExtetndedsParamsAdapter = {
  adapt(params?: StopListItemGetPaginateStopListItemExtetndedsParams): StopListItemGetPaginateStopListItemExtetndeds$Params {
    if (!params) {
      return {} as StopListItemGetPaginateStopListItemExtetndeds$Params;
    }
    return {
      body: adaptApiStopListItemFilterAltDto(params.body),
    };
  }
};
