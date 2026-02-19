import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesPublish2$Params } from '../../../swagger/fn/trades/trades-publish-2';
import { adaptApiTradeDtoWithSignature } from '../../adapters/toDto/api-trade-dto-with-signature.adapter';

export interface TradesPublish2Params {
  body?: TradeDtoWithSignature;
}

export const tradesPublish2ParamsAdapter = {
  adapt(params?: TradesPublish2Params): TradesPublish2$Params {
    if (!params) {
      return {} as TradesPublish2$Params;
    }
    return {
      body: adaptApiTradeDtoWithSignature(params.body),
    };
  }
};
