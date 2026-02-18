import { TradeDtoWithSignatureAlt } from '../../models/trade-dto-with-signature-alt.interface';
import { TradesPublishFromEis$Params } from '../../../swagger/fn/trades/trades-publish-from-eis';
import { adaptApiTradeDtoWithSignatureAltDto } from '../../adapters/toDto/api-trade-dto-with-signature.adapter';

export interface TradesPublishFromEisParams {
  body?: TradeDtoWithSignatureAlt;
}

export const tradesPublishFromEisParamsAdapter = {
  adapt(params?: TradesPublishFromEisParams): TradesPublishFromEis$Params {
    if (!params) {
      return {} as TradesPublishFromEis$Params;
    }
    return {
      body: adaptApiTradeDtoWithSignatureAltDto(params.body),
    };
  }
};
