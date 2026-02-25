import { DigitalSignature } from '../../models/digital-signature.interface';
import { ApiDigitalSignatureDto } from '../../../swagger/models/api-digital-signature-dto';
import { apiDetachedSignatureAltDtoAdapter } from './api-detached-signature.adapter';
import { apiKeyValuePairOfGuidAndByteOfAltDtoAdapter } from './api-key-value-pair-of-guid-and-byte-of.adapter';

export const apiDigitalSignatureDtoAdapter = (source?: DigitalSignature | null): ApiDigitalSignatureDto => {
  return {
    ...apiDetachedSignatureAltDtoAdapter(source as unknown as Parameters<typeof apiDetachedSignatureAltDtoAdapter>[0]),
    FileDetachedSigns: source?.fileDetachedSigns?.map((item) => apiKeyValuePairOfGuidAndByteOfAltDtoAdapter(item)),
    IsNeedCompareDtos: source?.isNeedCompareDtos,
    PowerOfAttorneyId: source?.powerOfAttorneyId,
    PowerOfAttorneyRequired: source?.powerOfAttorneyRequired,
  };
}
