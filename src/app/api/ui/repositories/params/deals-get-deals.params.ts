import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { DealsGetDeals$Params } from '../../../swagger/fn/deals/deals-get-deals';
import { adaptApiDealFilterObjectAltDto } from '../../adapters/toDto/api-deal-filter-object.adapter';

export interface DealsGetDealsParams {
  body?: DealFilterObjectAlt;
}

export const dealsGetDealsParamsAdapter = {
  adapt(params?: DealsGetDealsParams): DealsGetDeals$Params {
    if (!params) {
      return {} as DealsGetDeals$Params;
    }
    return {
      body: adaptApiDealFilterObjectAltDto(params.body),
    };
  }
};
