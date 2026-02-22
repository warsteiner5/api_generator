import { DealsGenerateDealNumber$Params } from '../../../swagger/fn/deals/deals-generate-deal-number';

// @ts-ignore
export interface DealsGenerateDealNumberParams {
}

export function dealsGenerateDealNumberAdapter(params?: DealsGenerateDealNumberParams): DealsGenerateDealNumber$Params {
  if (!params) {
    return {} as DealsGenerateDealNumber$Params;
  }
  return {
  };
}
