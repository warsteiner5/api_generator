import { ApiDealInfoForCancellationAltDto } from '../../../swagger/models/api-deal-info-for-cancellation';
import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const dealInfoForCancellationAltAdapter = (source?: ApiDealInfoForCancellationAltDto | null): DealInfoForCancellationAlt => {
  return {
    applicationId: source?.ApplicationId,
    comment: source?.Comment,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    id: source?.Id,
  };
}
