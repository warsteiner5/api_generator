import { FinanceSourcesGetAll$Params } from '../../../swagger/fn/finance-sources/finance-sources-get-all';

// @ts-ignore
export interface FinanceSourcesGetAllParams {
}

export function financeSourcesGetAllAdapter(params?: FinanceSourcesGetAllParams): FinanceSourcesGetAll$Params {
  if (!params) {
    return {} as FinanceSourcesGetAll$Params;
  }
  return {
  };
}
