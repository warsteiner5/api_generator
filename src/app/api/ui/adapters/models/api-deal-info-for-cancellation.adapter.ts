import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { ApiDealInfoForCancellationAltDto } from '../../../swagger/models/api-deal-info-for-cancellation';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiDealInfoForCancellationAltDtoAdapter = (source?: DealInfoForCancellationAlt | null): ApiDealInfoForCancellationAltDto => {
  return {
    ApplicationId: source?.applicationId,
    Comment: source?.comment,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    Id: source?.id,
  };
}
