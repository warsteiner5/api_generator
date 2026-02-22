import { AdditionalAgreementSignature } from '../../models/additional-agreement-signature.interface';
import { ApiAdditionalAgreementSignatureDto } from '../../../swagger/models/api-additional-agreement-signature-dto';

export const apiAdditionalAgreementSignatureDtoAdapter = (source?: AdditionalAgreementSignature | null): ApiAdditionalAgreementSignatureDto => {
  return {
    Content: source?.content,
    FileName: source?.fileName,
  };
}
