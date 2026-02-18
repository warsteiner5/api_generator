import { BubblesGetTradeBubble$Params } from '../../../swagger/fn/bubbles/bubbles-get-trade-bubble';

export interface BubblesGetTradeBubbleParams {
  tradeId: number;
}

export const bubblesGetTradeBubbleParamsAdapter = {
  adapt(params?: BubblesGetTradeBubbleParams): BubblesGetTradeBubble$Params {
    if (!params) {
      return {} as BubblesGetTradeBubble$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
