import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesGetCardPaymentAvailability$Params } from '../../../swagger/fn/trades/trades-get-card-payment-availability';
import { apiApplicationDto2Adapter } from '../../adapters/models/api-application-dto-2.adapter';

// @ts-ignore
export interface TradesGetCardPaymentAvailabilityParams {
  tradeId: number;
  body?: ApplicationDto2;
}

export function tradesGetCardPaymentAvailabilityAdapter(params?: TradesGetCardPaymentAvailabilityParams): TradesGetCardPaymentAvailability$Params {
  if (!params) {
    return {} as TradesGetCardPaymentAvailability$Params;
  }
  return {
      tradeId: params.tradeId,
      body: apiApplicationDto2Adapter(params.body),
  };
}
