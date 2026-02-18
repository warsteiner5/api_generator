import { RejectAdditionalAgreement } from '../../models/reject-additional-agreement.interface';
import { ApiRejectAdditionalAgreementDto } from '../../../swagger/models/api-reject-additional-agreement-dto';

export function adaptApiRejectAdditionalAgreementDto(source?: RejectAdditionalAgreement | null): ApiRejectAdditionalAgreementDto {
  return {
    CustomerId: source?.customerId,
    Id: source?.id,
    RejectReason: source?.rejectReason,
  };
}
