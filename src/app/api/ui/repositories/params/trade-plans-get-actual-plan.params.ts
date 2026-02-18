import { TradePlansGetActualPlan$Params } from '../../../swagger/fn/trade-plans/trade-plans-get-actual-plan';

export interface TradePlansGetActualPlanParams {
}

export const tradePlansGetActualPlanParamsAdapter = {
  adapt(params?: TradePlansGetActualPlanParams): TradePlansGetActualPlan$Params {
    if (!params) {
      return {} as TradePlansGetActualPlan$Params;
    }
    return {
    };
  }
};
