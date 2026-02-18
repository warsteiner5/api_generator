import { ApiSignatureForAdditionalAgreementDto } from '../../../swagger/models/api-signature-for-additional-agreement-dto';
import { SignatureForAdditionalAgreement } from '../../models/signature-for-additional-agreement.interface';

export function adaptSignatureForAdditionalAgreementToUI(source?: ApiSignatureForAdditionalAgreementDto | null): SignatureForAdditionalAgreement {
  return {
    powerOfAttorneyId: source?.PowerOfAttorneyId ?? '',
    powerOfAttorneyRequired: source?.PowerOfAttorneyRequired ?? false,
    signData: source?.SignData ?? '',
    signatureForAdditionalAgreementFilesObject: (source?.SignatureForAdditionalAgreementFilesObject ?? null) as any,
    signatureForAdditionalAgreementObject: source?.SignatureForAdditionalAgreementObject ?? '',
  };
}
