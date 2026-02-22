import { TradesSuggest$Params } from '../../../swagger/fn/trades/trades-suggest';

// @ts-ignore
export interface TradesSuggestParams {
  input: string;
}

export function tradesSuggestAdapter(params?: TradesSuggestParams): TradesSuggest$Params {
  if (!params) {
    return {} as TradesSuggest$Params;
  }
  return {
      input: params.input,
  };
}
