import { TradesSuggest$Params } from '../../../swagger/fn/trades/trades-suggest';

export interface TradesSuggestParams {
  input: string;
}

export const tradesSuggestParamsAdapter = {
  adapt(params?: TradesSuggestParams): TradesSuggest$Params {
    if (!params) {
      return {} as TradesSuggest$Params;
    }
    return {
      input: params.input,
    };
  }
};
