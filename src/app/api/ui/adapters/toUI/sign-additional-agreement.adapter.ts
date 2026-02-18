import { ApiSignAdditionalAgreementDto } from '../../../swagger/models/api-sign-additional-agreement-dto';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { adaptSignatureForAdditionalAgreementToUI } from './signature-for-additional-agreement.adapter';

export function adaptSignAdditionalAgreementToUI(source?: ApiSignAdditionalAgreementDto | null): SignAdditionalAgreement {
  return {
    customerId: source?.CustomerId ?? 0,
    id: source?.Id ?? 0,
    signature: adaptSignatureForAdditionalAgreementToUI(source?.Signature),
  };
}
