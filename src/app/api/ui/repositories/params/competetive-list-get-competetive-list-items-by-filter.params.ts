import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';
import { CompetetiveListGetCompetetiveListItemsByFilter$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-filter';
import { apiCompetetiveListFilterAltDtoAdapter } from '../../adapters/models/api-competetive-list-filter.adapter';

// @ts-ignore
export interface CompetetiveListGetCompetetiveListItemsByFilterParams {
  body?: CompetetiveListFilterAlt;
}

export function competetiveListGetCompetetiveListItemsByFilterAdapter(params?: CompetetiveListGetCompetetiveListItemsByFilterParams): CompetetiveListGetCompetetiveListItemsByFilter$Params {
  if (!params) {
    return {} as CompetetiveListGetCompetetiveListItemsByFilter$Params;
  }
  return {
      body: apiCompetetiveListFilterAltDtoAdapter(params.body),
  };
}
