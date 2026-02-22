import { AvailableOperationsGetByTrade$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-trade';

// @ts-ignore
export interface AvailableOperationsGetByTradeParams {
  tradeId: number;
}

export function availableOperationsGetByTradeAdapter(params?: AvailableOperationsGetByTradeParams): AvailableOperationsGetByTrade$Params {
  if (!params) {
    return {} as AvailableOperationsGetByTrade$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
