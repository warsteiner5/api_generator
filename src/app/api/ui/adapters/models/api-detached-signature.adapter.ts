import { DetachedSignatureAlt } from '../../models/detached-signature-alt.interface';
import { ApiDetachedSignatureAltDto } from '../../../swagger/models/api-detached-signature';

export const apiDetachedSignatureAltDtoAdapter = (source?: DetachedSignatureAlt | null): ApiDetachedSignatureAltDto => {
  return {
    SignData: source?.signData,
    Signature: source?.signature,
  };
}
