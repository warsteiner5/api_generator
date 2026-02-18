import { ApiCardPaymentAvailabilityAltDto } from '../../../swagger/models/api-card-payment-availability';
import { CardPaymentAvailabilityAlt } from '../../models/card-payment-availability-alt.interface';

export function adaptCardPaymentAvailabilityAltToUI(source?: ApiCardPaymentAvailabilityAltDto | null): CardPaymentAvailabilityAlt {
  return {
    isEnabled: source?.IsEnabled ?? false,
    isVisible: source?.IsVisible ?? false,
  };
}
