import { SignAdditionalAgreement } from '../../models/sign-additional-agreement.interface';
import { ApiSignAdditionalAgreementDto } from '../../../swagger/models/api-sign-additional-agreement-dto';
import { adaptApiSignatureForAdditionalAgreementDto } from './api-signature-for-additional-agreement-dto.adapter';

export function adaptApiSignAdditionalAgreementDto(source?: SignAdditionalAgreement | null): ApiSignAdditionalAgreementDto {
  return {
    CustomerId: source?.customerId,
    Id: source?.id,
    Signature: adaptApiSignatureForAdditionalAgreementDto(source?.signature),
  };
}
