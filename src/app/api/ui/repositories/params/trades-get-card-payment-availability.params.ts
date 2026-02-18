import { ApplicationDto2 } from '../../models/application-dto-2.interface';
import { TradesGetCardPaymentAvailability$Params } from '../../../swagger/fn/trades/trades-get-card-payment-availability';
import { adaptApiApplicationDto2 } from '../../adapters/toDto/api-application-dto-2.adapter';

export interface TradesGetCardPaymentAvailabilityParams {
  tradeId: number;
  body?: ApplicationDto2;
}

export const tradesGetCardPaymentAvailabilityParamsAdapter = {
  adapt(params?: TradesGetCardPaymentAvailabilityParams): TradesGetCardPaymentAvailability$Params {
    if (!params) {
      return {} as TradesGetCardPaymentAvailability$Params;
    }
    return {
      tradeId: params.tradeId,
      body: adaptApiApplicationDto2(params.body),
    };
  }
};
