import { FinanceSourcesGetAll$Params } from '../../../swagger/fn/finance-sources/finance-sources-get-all';

export interface FinanceSourcesGetAllParams {
}

export const financeSourcesGetAllParamsAdapter = {
  adapt(params?: FinanceSourcesGetAllParams): FinanceSourcesGetAll$Params {
    if (!params) {
      return {} as FinanceSourcesGetAll$Params;
    }
    return {
    };
  }
};
