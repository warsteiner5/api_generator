import { AvailableOperationsGetByDeal$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-deal';

export interface AvailableOperationsGetByDealParams {
  dealId: number;
}

export const availableOperationsGetByDealParamsAdapter = {
  adapt(params?: AvailableOperationsGetByDealParams): AvailableOperationsGetByDeal$Params {
    if (!params) {
      return {} as AvailableOperationsGetByDeal$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
