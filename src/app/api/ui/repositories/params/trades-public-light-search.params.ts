import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesPublicLightSearch$Params } from '../../../swagger/fn/trades/trades-public-light-search';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradesPublicLightSearchParams {
  totalCount: number;
  body?: SearchObjectAlt;
}

export const tradesPublicLightSearchParamsAdapter = {
  adapt(params?: TradesPublicLightSearchParams): TradesPublicLightSearch$Params {
    if (!params) {
      return {} as TradesPublicLightSearch$Params;
    }
    return {
      totalCount: params.totalCount,
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
