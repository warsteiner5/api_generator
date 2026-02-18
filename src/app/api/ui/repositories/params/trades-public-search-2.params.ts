import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { TradesPublicSearch2$Params } from '../../../swagger/fn/trades/trades-public-search-2';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface TradesPublicSearch2Params {
  body?: SearchObjectAlt;
}

export const tradesPublicSearch2ParamsAdapter = {
  adapt(params?: TradesPublicSearch2Params): TradesPublicSearch2$Params {
    if (!params) {
      return {} as TradesPublicSearch2$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
