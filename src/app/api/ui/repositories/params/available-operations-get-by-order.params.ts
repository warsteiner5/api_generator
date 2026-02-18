import { AvailableOperationsGetByOrder$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-order';

export interface AvailableOperationsGetByOrderParams {
  orderId: number;
}

export const availableOperationsGetByOrderParamsAdapter = {
  adapt(params?: AvailableOperationsGetByOrderParams): AvailableOperationsGetByOrder$Params {
    if (!params) {
      return {} as AvailableOperationsGetByOrder$Params;
    }
    return {
      orderId: params.orderId,
    };
  }
};
