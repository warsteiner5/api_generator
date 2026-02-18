import { BelgorodBudgetsGetBelgorodBudgets$Params } from '../../../swagger/fn/belgorod-budgets/belgorod-budgets-get-belgorod-budgets';

export interface BelgorodBudgetsGetBelgorodBudgetsParams {
  pageSize: number;
  name?: string;
}

export const belgorodBudgetsGetBelgorodBudgetsParamsAdapter = {
  adapt(params?: BelgorodBudgetsGetBelgorodBudgetsParams): BelgorodBudgetsGetBelgorodBudgets$Params {
    if (!params) {
      return {} as BelgorodBudgetsGetBelgorodBudgets$Params;
    }
    return {
      pageSize: params.pageSize,
      name: params.name,
    };
  }
};
