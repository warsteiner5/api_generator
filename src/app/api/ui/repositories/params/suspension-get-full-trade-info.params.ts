import { SuspensionGetFullTradeInfo$Params } from '../../../swagger/fn/suspension/suspension-get-full-trade-info';

export interface SuspensionGetFullTradeInfoParams {
  tradeId: number;
}

export const suspensionGetFullTradeInfoParamsAdapter = {
  adapt(params?: SuspensionGetFullTradeInfoParams): SuspensionGetFullTradeInfo$Params {
    if (!params) {
      return {} as SuspensionGetFullTradeInfo$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
