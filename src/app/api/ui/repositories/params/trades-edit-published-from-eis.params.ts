import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesEditPublishedFromEis$Params } from '../../../swagger/fn/trades/trades-edit-published-from-eis';
import { adaptApiTradeDtoWithSignature } from '../../adapters/toDto/api-trade-dto-with-signature.adapter';

export interface TradesEditPublishedFromEisParams {
  body?: TradeDtoWithSignature;
}

export const tradesEditPublishedFromEisParamsAdapter = {
  adapt(params?: TradesEditPublishedFromEisParams): TradesEditPublishedFromEis$Params {
    if (!params) {
      return {} as TradesEditPublishedFromEis$Params;
    }
    return {
      body: adaptApiTradeDtoWithSignature(params.body),
    };
  }
};
