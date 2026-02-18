import { DealFilterObjectAlt } from '../../models/deal-filter-object-alt.interface';
import { DealGetDeals$Params } from '../../../swagger/fn/deal/deal-get-deals';
import { adaptApiDealFilterObjectAltDto } from '../../adapters/toDto/api-deal-filter-object.adapter';

export interface DealGetDealsParams {
  body?: DealFilterObjectAlt;
}

export const dealGetDealsParamsAdapter = {
  adapt(params?: DealGetDealsParams): DealGetDeals$Params {
    if (!params) {
      return {} as DealGetDeals$Params;
    }
    return {
      body: adaptApiDealFilterObjectAltDto(params.body),
    };
  }
};
