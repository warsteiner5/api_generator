import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { ApiSignAdditionalAgreementDto } from '../../../swagger/models/api-sign-additional-agreement-dto';
import { apiSignatureForAdditionalAgreementDtoAdapter } from './api-signature-for-additional-agreement-dto.adapter';

export const apiSignAdditionalAgreementDtoAdapter = (source?: SignAdditionalAgreement | null): ApiSignAdditionalAgreementDto => {
  return {
    CustomerId: source?.customerId,
    Id: source?.id,
    Signature: source?.signature === null ? undefined : apiSignatureForAdditionalAgreementDtoAdapter(source?.signature),
  };
}
