import { TradesNotTookPlaceValidatePossibilityToLink$Params } from '../../../swagger/fn/trades-not-took-place/trades-not-took-place-validate-possibility-to-link';

export interface TradesNotTookPlaceValidatePossibilityToLinkParams {
  childTradeId: number;
}

export const tradesNotTookPlaceValidatePossibilityToLinkParamsAdapter = {
  adapt(params?: TradesNotTookPlaceValidatePossibilityToLinkParams): TradesNotTookPlaceValidatePossibilityToLink$Params {
    if (!params) {
      return {} as TradesNotTookPlaceValidatePossibilityToLink$Params;
    }
    return {
      childTradeId: params.childTradeId,
    };
  }
};
