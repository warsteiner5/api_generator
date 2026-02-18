import { AvailableOperationsGetByApplication2$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-application-2';

export interface AvailableOperationsGetByApplication2Params {
  tradeId: number;
  applicationId: number;
}

export const availableOperationsGetByApplication2ParamsAdapter = {
  adapt(params?: AvailableOperationsGetByApplication2Params): AvailableOperationsGetByApplication2$Params {
    if (!params) {
      return {} as AvailableOperationsGetByApplication2$Params;
    }
    return {
      tradeId: params.tradeId,
      applicationId: params.applicationId,
    };
  }
};
