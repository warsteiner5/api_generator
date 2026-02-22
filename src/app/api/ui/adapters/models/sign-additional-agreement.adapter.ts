import { ApiSignAdditionalAgreementDto } from '../../../swagger/models/api-sign-additional-agreement-dto';
import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { signatureForAdditionalAgreementAdapter } from './signature-for-additional-agreement.adapter';

export const signAdditionalAgreementAdapter = (source?: ApiSignAdditionalAgreementDto | null): SignAdditionalAgreement => {
  return {
    customerId: source?.CustomerId,
    id: source?.Id,
    signature: source?.Signature === null ? undefined : signatureForAdditionalAgreementAdapter(source?.Signature),
  };
}
