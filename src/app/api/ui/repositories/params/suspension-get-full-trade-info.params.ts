import { SuspensionGetFullTradeInfo$Params } from '../../../swagger/fn/suspension/suspension-get-full-trade-info';

// @ts-ignore
export interface SuspensionGetFullTradeInfoParams {
  tradeId: number;
}

export function suspensionGetFullTradeInfoAdapter(params?: SuspensionGetFullTradeInfoParams): SuspensionGetFullTradeInfo$Params {
  if (!params) {
    return {} as SuspensionGetFullTradeInfo$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
