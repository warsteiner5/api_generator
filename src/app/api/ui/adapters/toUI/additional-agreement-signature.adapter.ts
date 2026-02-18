import { ApiAdditionalAgreementSignatureDto } from '../../../swagger/models/api-additional-agreement-signature-dto';
import { AdditionalAgreementSignature } from '../../models/additional-agreement-signature.interface';

export function adaptAdditionalAgreementSignatureToUI(source?: ApiAdditionalAgreementSignatureDto | null): AdditionalAgreementSignature {
  return {
    content: source?.Content ?? '',
    fileName: source?.FileName ?? '',
  };
}
