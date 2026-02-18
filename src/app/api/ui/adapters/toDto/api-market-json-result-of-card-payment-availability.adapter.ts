import { MarketJsonResultOfCardPaymentAvailability } from '../../models/market-json-result-of-card-payment-availability.interface';
import { ApiMarketJsonResultOfCardPaymentAvailability } from '../../../swagger/models/api-market-json-result-of-card-payment-availability';

export function adaptApiMarketJsonResultOfCardPaymentAvailability(source?: MarketJsonResultOfCardPaymentAvailability | null): ApiMarketJsonResultOfCardPaymentAvailability {
  return (source ?? {}) as ApiMarketJsonResultOfCardPaymentAvailability;
}
