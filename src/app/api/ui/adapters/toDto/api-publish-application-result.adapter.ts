import { PublishApplicationResultAlt } from '../../models/publish-application-result-alt.interface';
import { ApiPublishApplicationResultAltDto } from '../../../swagger/models/api-publish-application-result';

export function adaptApiPublishApplicationResultAltDto(source?: PublishApplicationResultAlt | null): ApiPublishApplicationResultAltDto {
  return {
    Id: source?.id,
    PaymentBlockUrl: source?.paymentBlockUrl,
  };
}
