import { ApiAdditionalAgreementSignatureDto } from '../../../swagger/models/api-additional-agreement-signature-dto';
import { AdditionalAgreementSignature } from '../../models/additional-agreement-signature.interface';

export const additionalAgreementSignatureAdapter = (source?: ApiAdditionalAgreementSignatureDto | null): AdditionalAgreementSignature => {
  return {
    content: source?.Content,
    fileName: source?.FileName,
  };
}
