import { ApiSignatureForAdditionalAgreementDto } from '../../../swagger/models/api-signature-for-additional-agreement-dto';
import { SignatureForAdditionalAgreement } from '../../models/signature-for-additional-agreement.interface';

export const signatureForAdditionalAgreementAdapter = (source?: ApiSignatureForAdditionalAgreementDto | null): SignatureForAdditionalAgreement => {
  return {
    powerOfAttorneyId: source?.PowerOfAttorneyId,
    powerOfAttorneyRequired: source?.PowerOfAttorneyRequired,
    signData: source?.SignData,
    signatureForAdditionalAgreementFilesObject: source?.SignatureForAdditionalAgreementFilesObject as any,
    signatureForAdditionalAgreementObject: source?.SignatureForAdditionalAgreementObject,
  };
}
