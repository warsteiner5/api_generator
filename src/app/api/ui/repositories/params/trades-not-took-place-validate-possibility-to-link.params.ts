import { TradesNotTookPlaceValidatePossibilityToLink$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-validate-possibility-to-link';

// @ts-ignore
export interface TradesNotTookPlaceValidatePossibilityToLinkParams {
  childTradeId: number;
}

export function tradesNotTookPlaceValidatePossibilityToLinkAdapter(params?: TradesNotTookPlaceValidatePossibilityToLinkParams): TradesNotTookPlaceValidatePossibilityToLink$Params {
  if (!params) {
    return {} as TradesNotTookPlaceValidatePossibilityToLink$Params;
  }
  return {
      childTradeId: params.childTradeId,
  };
}
