import { ApiPublishApplicationResultAltDto } from '../../../swagger/models/api-publish-application-result';
import { PublishApplicationResultAlt } from '../../models/publish-application-result-alt.interface';

export function adaptPublishApplicationResultAltToUI(source?: ApiPublishApplicationResultAltDto | null): PublishApplicationResultAlt {
  return {
    id: source?.Id ?? 0,
    paymentBlockUrl: source?.PaymentBlockUrl ?? '',
  };
}
