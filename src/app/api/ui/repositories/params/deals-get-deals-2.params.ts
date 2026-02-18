import { DealsGetDeals2$Params } from '../../../swagger/fn/deals/deals-get-deals-2';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface DealsGetDeals2Params {
  body?: SearchObjectAlt;
}

export const dealsGetDeals2ParamsAdapter = {
  adapt(params?: DealsGetDeals2Params): DealsGetDeals2$Params {
    if (!params) {
      return {} as DealsGetDeals2$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
