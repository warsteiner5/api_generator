import { ApiRejectAdditionalAgreementDto } from '../../../swagger/models/api-reject-additional-agreement-dto';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';

export function adaptRejectAdditionalAgreementToUI(source?: ApiRejectAdditionalAgreementDto | null): RejectAdditionalAgreement {
  return {
    customerId: source?.CustomerId ?? 0,
    id: source?.Id ?? 0,
    rejectReason: source?.RejectReason ?? '',
  };
}
