import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesExternalSearch$Params } from '../../../swagger/fn/trades/trades-external-search';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradesExternalSearchParams {
  body?: SearchObjectAlt;
}

export const tradesExternalSearchParamsAdapter = {
  adapt(params?: TradesExternalSearchParams): TradesExternalSearch$Params {
    if (!params) {
      return {} as TradesExternalSearch$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
