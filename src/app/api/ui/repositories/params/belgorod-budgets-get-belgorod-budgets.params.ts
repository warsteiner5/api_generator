import { BelgorodBudgetsGetBelgorodBudgets$Params } from '../../../swagger/fn/belgorod-budgets/belgorod-budgets-get-belgorod-budgets';

// @ts-ignore
export interface BelgorodBudgetsGetBelgorodBudgetsParams {
  pageSize: number;
  name?: string;
}

export function belgorodBudgetsGetBelgorodBudgetsAdapter(params?: BelgorodBudgetsGetBelgorodBudgetsParams): BelgorodBudgetsGetBelgorodBudgets$Params {
  if (!params) {
    return {} as BelgorodBudgetsGetBelgorodBudgets$Params;
  }
  return {
      pageSize: params.pageSize,
      name: params.name,
  };
}
