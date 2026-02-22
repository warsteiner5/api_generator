import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesPublish2$Params } from '../../../swagger/fn/trades/trades-publish-2';
import { apiTradeDtoWithSignatureAdapter } from '../../adapters/models/api-trade-dto-with-signature.adapter';

// @ts-ignore
export interface TradesPublish2Params {
  body?: TradeDtoWithSignature;
}

export function tradesPublish2Adapter(params?: TradesPublish2Params): TradesPublish2$Params {
  if (!params) {
    return {} as TradesPublish2$Params;
  }
  return {
      body: apiTradeDtoWithSignatureAdapter(params.body),
  };
}
