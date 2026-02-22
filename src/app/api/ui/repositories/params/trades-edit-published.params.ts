import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesEditPublished$Params } from '../../../swagger/fn/trades/trades-edit-published';
import { apiTradeDtoWithSignatureAdapter } from '../../adapters/models/api-trade-dto-with-signature.adapter';

// @ts-ignore
export interface TradesEditPublishedParams {
  body?: TradeDtoWithSignature;
}

export function tradesEditPublishedAdapter(params?: TradesEditPublishedParams): TradesEditPublished$Params {
  if (!params) {
    return {} as TradesEditPublished$Params;
  }
  return {
      body: apiTradeDtoWithSignatureAdapter(params.body),
  };
}
