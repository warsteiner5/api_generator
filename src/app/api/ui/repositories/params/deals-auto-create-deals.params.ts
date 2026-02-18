import { DealsAutoCreateDeals$Params } from '../../../swagger/fn/deals/deals-auto-create-deals';

export interface DealsAutoCreateDealsParams {
  tradeLotId: number;
}

export const dealsAutoCreateDealsParamsAdapter = {
  adapt(params?: DealsAutoCreateDealsParams): DealsAutoCreateDeals$Params {
    if (!params) {
      return {} as DealsAutoCreateDeals$Params;
    }
    return {
      tradeLotId: params.tradeLotId,
    };
  }
};
