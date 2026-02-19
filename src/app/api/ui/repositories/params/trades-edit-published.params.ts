import { TradeDtoWithSignature } from '../../models/trade-dto-with-signature.interface';
import { TradesEditPublished$Params } from '../../../swagger/fn/trades/trades-edit-published';
import { adaptApiTradeDtoWithSignature } from '../../adapters/toDto/api-trade-dto-with-signature.adapter';

export interface TradesEditPublishedParams {
  body?: TradeDtoWithSignature;
}

export const tradesEditPublishedParamsAdapter = {
  adapt(params?: TradesEditPublishedParams): TradesEditPublished$Params {
    if (!params) {
      return {} as TradesEditPublished$Params;
    }
    return {
      body: adaptApiTradeDtoWithSignature(params.body),
    };
  }
};
