import { TradePlansGetPlanShortDetails$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-plan-short-details';

// @ts-ignore
export interface TradePlansGetPlanShortDetailsParams {
  id: number;
}

export function tradePlansGetPlanShortDetailsAdapter(params?: TradePlansGetPlanShortDetailsParams): TradePlansGetPlanShortDetails$Params {
  if (!params) {
    return {} as TradePlansGetPlanShortDetails$Params;
  }
  return {
      id: params.id,
  };
}
