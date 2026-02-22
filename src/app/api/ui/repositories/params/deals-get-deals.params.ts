import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { DealsGetDeals$Params } from '../../../swagger/fn/deals/deals-get-deals';
import { apiDealFilterObjectAltDtoAdapter } from '../../adapters/models/api-deal-filter-object.adapter';

// @ts-ignore
export interface DealsGetDealsParams {
  body?: DealFilterObjectAlt;
}

export function dealsGetDealsAdapter(params?: DealsGetDealsParams): DealsGetDeals$Params {
  if (!params) {
    return {} as DealsGetDeals$Params;
  }
  return {
      body: apiDealFilterObjectAltDtoAdapter(params.body),
  };
}
