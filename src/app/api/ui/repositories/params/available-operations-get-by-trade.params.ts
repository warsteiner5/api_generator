import { AvailableOperationsGetByTrade$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-trade';

export interface AvailableOperationsGetByTradeParams {
  tradeId: number;
}

export const availableOperationsGetByTradeParamsAdapter = {
  adapt(params?: AvailableOperationsGetByTradeParams): AvailableOperationsGetByTrade$Params {
    if (!params) {
      return {} as AvailableOperationsGetByTrade$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
