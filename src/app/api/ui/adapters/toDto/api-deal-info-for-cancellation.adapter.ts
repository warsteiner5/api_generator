import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { ApiDealInfoForCancellationAltDto } from '../../../swagger/models/api-deal-info-for-cancellation';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiDealInfoForCancellationAltDto(source?: DealInfoForCancellationAlt | null): ApiDealInfoForCancellationAltDto {
  return {
    ApplicationId: source?.applicationId,
    Comment: source?.comment,
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    Id: source?.id,
  };
}
