import { ApiDetachedSignatureAltDto } from '../../../swagger/models/api-detached-signature';
import { DetachedSignatureAlt } from '../../models/detached-signature-alt.interface';

export function adaptDetachedSignatureAltToUI(source?: ApiDetachedSignatureAltDto | null): DetachedSignatureAlt {
  return {
    signData: source?.SignData ?? '',
    signature: source?.Signature ?? '',
  };
}
