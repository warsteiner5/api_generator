import { ApiDigitalSignatureDto } from '../../../swagger/models/api-digital-signature-dto';
import { DigitalSignature } from '../../models/digital-signature.interface';
import { detachedSignatureAltAdapter } from './detached-signature-alt.adapter';
import { keyValuePairOfGuidAndByteOfAltAdapter } from './key-value-pair-of-guid-and-byte-of-alt.adapter';

export const digitalSignatureAdapter = (source?: ApiDigitalSignatureDto | null): DigitalSignature => {
  return {
    ...detachedSignatureAltAdapter(source as unknown as Parameters<typeof detachedSignatureAltAdapter>[0]),
    fileDetachedSigns: source?.FileDetachedSigns?.map((item) => keyValuePairOfGuidAndByteOfAltAdapter(item)),
    isNeedCompareDtos: source?.IsNeedCompareDtos,
    powerOfAttorneyId: source?.PowerOfAttorneyId,
    powerOfAttorneyRequired: source?.PowerOfAttorneyRequired,
  };
}
