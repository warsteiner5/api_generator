import { DealsGenerateDealNumber$Params } from '../../../swagger/fn/deals/deals-generate-deal-number';

export interface DealsGenerateDealNumberParams {
}

export const dealsGenerateDealNumberParamsAdapter = {
  adapt(params?: DealsGenerateDealNumberParams): DealsGenerateDealNumber$Params {
    if (!params) {
      return {} as DealsGenerateDealNumber$Params;
    }
    return {
    };
  }
};
