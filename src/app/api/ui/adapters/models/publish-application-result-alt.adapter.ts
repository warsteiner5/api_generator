import { ApiPublishApplicationResultAltDto } from '../../../swagger/models/api-publish-application-result';
import { PublishApplicationResultAlt } from '../../models/publish-application-result-alt.interface';

export const publishApplicationResultAltAdapter = (source?: ApiPublishApplicationResultAltDto | null): PublishApplicationResultAlt => {
  return {
    id: source?.Id,
    paymentBlockUrl: source?.PaymentBlockUrl,
  };
}
