import { AvailableOperationsGetByDeal$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-deal';

// @ts-ignore
export interface AvailableOperationsGetByDealParams {
  dealId: number;
}

export function availableOperationsGetByDealAdapter(params?: AvailableOperationsGetByDealParams): AvailableOperationsGetByDeal$Params {
  if (!params) {
    return {} as AvailableOperationsGetByDeal$Params;
  }
  return {
      dealId: params.dealId,
  };
}
