import { AvailableOperationsGetByApplication$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-application';

// @ts-ignore
export interface AvailableOperationsGetByApplicationParams {
  tradeId: number;
  applicationId?: number;
}

export function availableOperationsGetByApplicationAdapter(params?: AvailableOperationsGetByApplicationParams): AvailableOperationsGetByApplication$Params {
  if (!params) {
    return {} as AvailableOperationsGetByApplication$Params;
  }
  return {
      tradeId: params.tradeId,
      applicationId: params.applicationId,
  };
}
