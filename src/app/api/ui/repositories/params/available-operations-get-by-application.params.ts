import { AvailableOperationsGetByApplication$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-application';

export interface AvailableOperationsGetByApplicationParams {
  tradeId: number;
  applicationId?: number;
}

export const availableOperationsGetByApplicationParamsAdapter = {
  adapt(params?: AvailableOperationsGetByApplicationParams): AvailableOperationsGetByApplication$Params {
    if (!params) {
      return {} as AvailableOperationsGetByApplication$Params;
    }
    return {
      tradeId: params.tradeId,
      applicationId: params.applicationId,
    };
  }
};
