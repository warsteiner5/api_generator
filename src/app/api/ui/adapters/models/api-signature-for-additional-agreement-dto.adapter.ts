import { SignatureForAdditionalAgreement } from '../../models/signature-for-additional-agreement.interface';
import { ApiSignatureForAdditionalAgreementDto } from '../../../swagger/models/api-signature-for-additional-agreement-dto';

export const apiSignatureForAdditionalAgreementDtoAdapter = (source?: SignatureForAdditionalAgreement | null): ApiSignatureForAdditionalAgreementDto => {
  return {
    PowerOfAttorneyId: source?.powerOfAttorneyId,
    PowerOfAttorneyRequired: source?.powerOfAttorneyRequired,
    SignData: source?.signData,
    SignatureForAdditionalAgreementFilesObject: source?.signatureForAdditionalAgreementFilesObject as any,
    SignatureForAdditionalAgreementObject: source?.signatureForAdditionalAgreementObject,
  };
}
