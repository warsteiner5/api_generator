import { ApiCardPaymentAvailabilityAltDto } from '../../../swagger/models/api-card-payment-availability';
import { CardPaymentAvailabilityAlt } from '../../models/card-payment-availability-alt.interface';

export const cardPaymentAvailabilityAltAdapter = (source?: ApiCardPaymentAvailabilityAltDto | null): CardPaymentAvailabilityAlt => {
  return {
    isEnabled: source?.IsEnabled,
    isVisible: source?.IsVisible,
  };
}
