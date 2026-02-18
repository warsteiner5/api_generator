import { ApiDigitalSignatureDto } from '../../../swagger/models/api-digital-signature-dto';
import { DigitalSignature } from '../../models/digital-signature.interface';

export function adaptDigitalSignatureToUI(source?: ApiDigitalSignatureDto | null): DigitalSignature {
  return (source ?? {}) as DigitalSignature;
}
