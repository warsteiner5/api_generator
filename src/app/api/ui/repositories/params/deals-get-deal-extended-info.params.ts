import { DealsGetDealExtendedInfo$Params } from '../../../swagger/fn/deals/deals-get-deal-extended-info';

export interface DealsGetDealExtendedInfoParams {
  dealId: number;
}

export const dealsGetDealExtendedInfoParamsAdapter = {
  adapt(params?: DealsGetDealExtendedInfoParams): DealsGetDealExtendedInfo$Params {
    if (!params) {
      return {} as DealsGetDealExtendedInfo$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
