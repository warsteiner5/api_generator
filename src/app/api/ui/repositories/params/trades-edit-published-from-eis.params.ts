import { TradeDtoWithSignatureAlt } from '../../models/trade-dto-with-signature-alt.interface';
import { TradesEditPublishedFromEis$Params } from '../../../swagger/fn/trades/trades-edit-published-from-eis';
import { adaptApiTradeDtoWithSignatureAltDto } from '../../adapters/toDto/api-trade-dto-with-signature.adapter';

export interface TradesEditPublishedFromEisParams {
  body?: TradeDtoWithSignatureAlt;
}

export const tradesEditPublishedFromEisParamsAdapter = {
  adapt(params?: TradesEditPublishedFromEisParams): TradesEditPublishedFromEis$Params {
    if (!params) {
      return {} as TradesEditPublishedFromEis$Params;
    }
    return {
      body: adaptApiTradeDtoWithSignatureAltDto(params.body),
    };
  }
};
