import { BubblesGetTradeBubble$Params } from '../../../swagger/fn/bubbles/bubbles-get-trade-bubble';

// @ts-ignore
export interface BubblesGetTradeBubbleParams {
  tradeId: number;
}

export function bubblesGetTradeBubbleAdapter(params?: BubblesGetTradeBubbleParams): BubblesGetTradeBubble$Params {
  if (!params) {
    return {} as BubblesGetTradeBubble$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
