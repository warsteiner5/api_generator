import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesGetDealsList$Params } from '../../../swagger/fn/trades/trades-get-deals-list';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradesGetDealsListParams {
  body?: SearchObjectAlt;
}

export const tradesGetDealsListParamsAdapter = {
  adapt(params?: TradesGetDealsListParams): TradesGetDealsList$Params {
    if (!params) {
      return {} as TradesGetDealsList$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
