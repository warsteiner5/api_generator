import { DealsGetDeals2$Params } from '../../../swagger/fn/deals/deals-get-deals-2';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface DealsGetDeals2Params {
  body?: SearchObjectAlt;
}

export function dealsGetDeals2Adapter(params?: DealsGetDeals2Params): DealsGetDeals2$Params {
  if (!params) {
    return {} as DealsGetDeals2$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
