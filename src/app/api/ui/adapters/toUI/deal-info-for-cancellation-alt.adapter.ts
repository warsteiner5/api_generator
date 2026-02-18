import { ApiDealInfoForCancellationAltDto } from '../../../swagger/models/api-deal-info-for-cancellation';
import { DealInfoForCancellationAlt } from '../../models/deal-info-for-cancellation-alt.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptDealInfoForCancellationAltToUI(source?: ApiDealInfoForCancellationAltDto | null): DealInfoForCancellationAlt {
  return {
    applicationId: source?.ApplicationId ?? 0,
    comment: source?.Comment ?? '',
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    id: source?.Id ?? 0,
  };
}
