import { CardPaymentAvailabilityAlt } from '../../models/card-payment-availability-alt.interface';
import { ApiCardPaymentAvailabilityAltDto } from '../../../swagger/models/api-card-payment-availability';

export const apiCardPaymentAvailabilityAltDtoAdapter = (source?: CardPaymentAvailabilityAlt | null): ApiCardPaymentAvailabilityAltDto => {
  return {
    IsEnabled: source?.isEnabled,
    IsVisible: source?.isVisible,
  };
}
