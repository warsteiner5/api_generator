import { TradePlansGetPlanShortDetails$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-plan-short-details';

export interface TradePlansGetPlanShortDetailsParams {
  id: number;
}

export const tradePlansGetPlanShortDetailsParamsAdapter = {
  adapt(params?: TradePlansGetPlanShortDetailsParams): TradePlansGetPlanShortDetails$Params {
    if (!params) {
      return {} as TradePlansGetPlanShortDetails$Params;
    }
    return {
      id: params.id,
    };
  }
};
