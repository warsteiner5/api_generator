import { ApiMarketJsonResultOfCardPaymentAvailability } from '../../../swagger/models/api-market-json-result-of-card-payment-availability';
import { MarketJsonResultOfCardPaymentAvailability } from '../../models/market-json-result-of-card-payment-availability.interface';

export function adaptMarketJsonResultOfCardPaymentAvailabilityToUI(source?: ApiMarketJsonResultOfCardPaymentAvailability | null): MarketJsonResultOfCardPaymentAvailability {
  return (source ?? {}) as MarketJsonResultOfCardPaymentAvailability;
}
