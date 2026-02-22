import { AvailableOperationsGetByOrder$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-order';

// @ts-ignore
export interface AvailableOperationsGetByOrderParams {
  orderId: number;
}

export function availableOperationsGetByOrderAdapter(params?: AvailableOperationsGetByOrderParams): AvailableOperationsGetByOrder$Params {
  if (!params) {
    return {} as AvailableOperationsGetByOrder$Params;
  }
  return {
      orderId: params.orderId,
  };
}
