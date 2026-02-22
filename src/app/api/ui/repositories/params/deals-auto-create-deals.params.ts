import { DealsAutoCreateDeals$Params } from '../../../swagger/fn/deals/deals-auto-create-deals';

// @ts-ignore
export interface DealsAutoCreateDealsParams {
  tradeLotId: number;
}

export function dealsAutoCreateDealsAdapter(params?: DealsAutoCreateDealsParams): DealsAutoCreateDeals$Params {
  if (!params) {
    return {} as DealsAutoCreateDeals$Params;
  }
  return {
      tradeLotId: params.tradeLotId,
  };
}
