import { DealGetActiveDealForTrade$Params } from '../../../swagger/fn/deal/deal-get-active-deal-for-trade';

// @ts-ignore
export interface DealGetActiveDealForTradeParams {
  id: number;
}

export function dealGetActiveDealForTradeAdapter(params?: DealGetActiveDealForTradeParams): DealGetActiveDealForTrade$Params {
  if (!params) {
    return {} as DealGetActiveDealForTrade$Params;
  }
  return {
      id: params.id,
  };
}
