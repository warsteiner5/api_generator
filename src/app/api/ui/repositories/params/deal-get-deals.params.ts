import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { DealGetDeals$Params } from '../../../swagger/fn/deal/deal-get-deals';
import { apiDealFilterObjectAltDtoAdapter } from '../../adapters/models/api-deal-filter-object.adapter';

// @ts-ignore
export interface DealGetDealsParams {
  body?: DealFilterObjectAlt;
}

export function dealGetDealsAdapter(params?: DealGetDealsParams): DealGetDeals$Params {
  if (!params) {
    return {} as DealGetDeals$Params;
  }
  return {
      body: apiDealFilterObjectAltDtoAdapter(params.body),
  };
}
