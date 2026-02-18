import { Cancellation } from '../../models/cancellation.interface';
import { TradeRevokeTrade$Params } from '../../../swagger/fn/trade/trade-revoke-trade';
import { adaptApiCancellationDto } from '../../adapters/toDto/api-cancellation-dto.adapter';

export interface TradeRevokeTradeParams {
  id: number;
  body?: Cancellation;
}

export const tradeRevokeTradeParamsAdapter = {
  adapt(params?: TradeRevokeTradeParams): TradeRevokeTrade$Params {
    if (!params) {
      return {} as TradeRevokeTrade$Params;
    }
    return {
      id: params.id,
      body: adaptApiCancellationDto(params.body),
    };
  }
};
