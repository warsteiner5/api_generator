import { DealsGetCountDownTime$Params } from '../../../swagger/fn/deals/deals-get-count-down-time';

// @ts-ignore
export interface DealsGetCountDownTimeParams {
  dealId: number;
}

export function dealsGetCountDownTimeAdapter(params?: DealsGetCountDownTimeParams): DealsGetCountDownTime$Params {
  if (!params) {
    return {} as DealsGetCountDownTime$Params;
  }
  return {
      dealId: params.dealId,
  };
}
