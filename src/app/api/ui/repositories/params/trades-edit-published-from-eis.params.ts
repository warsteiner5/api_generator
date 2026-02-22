import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesEditPublishedFromEis$Params } from '../../../swagger/fn/trades/trades-edit-published-from-eis';
import { apiTradeDtoWithSignatureAdapter } from '../../adapters/models/api-trade-dto-with-signature.adapter';

// @ts-ignore
export interface TradesEditPublishedFromEisParams {
  body?: TradeDtoWithSignature;
}

export function tradesEditPublishedFromEisAdapter(params?: TradesEditPublishedFromEisParams): TradesEditPublishedFromEis$Params {
  if (!params) {
    return {} as TradesEditPublishedFromEis$Params;
  }
  return {
      body: apiTradeDtoWithSignatureAdapter(params.body),
  };
}
