import { DealsGetCountDownTime$Params } from '../../../swagger/fn/deals/deals-get-count-down-time';

export interface DealsGetCountDownTimeParams {
  dealId: number;
}

export const dealsGetCountDownTimeParamsAdapter = {
  adapt(params?: DealsGetCountDownTimeParams): DealsGetCountDownTime$Params {
    if (!params) {
      return {} as DealsGetCountDownTime$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
