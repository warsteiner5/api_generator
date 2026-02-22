import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesPublishFromEis$Params } from '../../../swagger/fn/trades/trades-publish-from-eis';
import { apiTradeDtoWithSignatureAdapter } from '../../adapters/models/api-trade-dto-with-signature.adapter';

// @ts-ignore
export interface TradesPublishFromEisParams {
  body?: TradeDtoWithSignature;
}

export function tradesPublishFromEisAdapter(params?: TradesPublishFromEisParams): TradesPublishFromEis$Params {
  if (!params) {
    return {} as TradesPublishFromEis$Params;
  }
  return {
      body: apiTradeDtoWithSignatureAdapter(params.body),
  };
}
