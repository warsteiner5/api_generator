import { ApiRejectAdditionalAgreementDto } from '../../../swagger/models/api-reject-additional-agreement-dto';
import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';

export const rejectAdditionalAgreementAdapter = (source?: ApiRejectAdditionalAgreementDto | null): RejectAdditionalAgreement => {
  return {
    customerId: source?.CustomerId,
    id: source?.Id,
    rejectReason: source?.RejectReason,
  };
}
