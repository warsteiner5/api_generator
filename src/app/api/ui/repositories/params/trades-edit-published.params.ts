import { TradeDtoWithSignatureAlt } from '../../models/trade-dto-with-signature-alt.interface';
import { TradesEditPublished$Params } from '../../../swagger/fn/trades/trades-edit-published';
import { adaptApiTradeDtoWithSignatureAltDto } from '../../adapters/toDto/api-trade-dto-with-signature.adapter';

export interface TradesEditPublishedParams {
  body?: TradeDtoWithSignatureAlt;
}

export const tradesEditPublishedParamsAdapter = {
  adapt(params?: TradesEditPublishedParams): TradesEditPublished$Params {
    if (!params) {
      return {} as TradesEditPublished$Params;
    }
    return {
      body: adaptApiTradeDtoWithSignatureAltDto(params.body),
    };
  }
};
