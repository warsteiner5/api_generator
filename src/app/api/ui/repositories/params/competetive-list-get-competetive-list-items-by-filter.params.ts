import { CompetetiveListFilterAlt } from '../../models/competetive-list-filter-alt.interface';
import { CompetetiveListGetCompetetiveListItemsByFilter$Params } from '../../../swagger/fn/competetive-list/competetive-list-get-competetive-list-items-by-filter';
import { adaptApiCompetetiveListFilterAltDto } from '../../adapters/toDto/api-competetive-list-filter.adapter';

export interface CompetetiveListGetCompetetiveListItemsByFilterParams {
  body?: CompetetiveListFilterAlt;
}

export const competetiveListGetCompetetiveListItemsByFilterParamsAdapter = {
  adapt(params?: CompetetiveListGetCompetetiveListItemsByFilterParams): CompetetiveListGetCompetetiveListItemsByFilter$Params {
    if (!params) {
      return {} as CompetetiveListGetCompetetiveListItemsByFilter$Params;
    }
    return {
      body: adaptApiCompetetiveListFilterAltDto(params.body),
    };
  }
};
