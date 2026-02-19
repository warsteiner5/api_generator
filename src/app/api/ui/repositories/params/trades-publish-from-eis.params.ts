import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesPublishFromEis$Params } from '../../../swagger/fn/trades/trades-publish-from-eis';
import { adaptApiTradeDtoWithSignature } from '../../adapters/toDto/api-trade-dto-with-signature.adapter';

export interface TradesPublishFromEisParams {
  body?: TradeDtoWithSignature;
}

export const tradesPublishFromEisParamsAdapter = {
  adapt(params?: TradesPublishFromEisParams): TradesPublishFromEis$Params {
    if (!params) {
      return {} as TradesPublishFromEis$Params;
    }
    return {
      body: adaptApiTradeDtoWithSignature(params.body),
    };
  }
};
