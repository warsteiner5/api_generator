import { DealsGetDealExtendedInfo$Params } from '../../../swagger/fn/deals/deals-get-deal-extended-info';

// @ts-ignore
export interface DealsGetDealExtendedInfoParams {
  dealId: number;
}

export function dealsGetDealExtendedInfoAdapter(params?: DealsGetDealExtendedInfoParams): DealsGetDealExtendedInfo$Params {
  if (!params) {
    return {} as DealsGetDealExtendedInfo$Params;
  }
  return {
      dealId: params.dealId,
  };
}
