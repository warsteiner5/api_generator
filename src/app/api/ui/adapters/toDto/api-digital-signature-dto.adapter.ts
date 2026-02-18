import { DigitalSignature } from '../../models/digital-signature.interface';
import { ApiDigitalSignatureDto } from '../../../swagger/models/api-digital-signature-dto';

export function adaptApiDigitalSignatureDto(source?: DigitalSignature | null): ApiDigitalSignatureDto {
  return (source ?? {}) as ApiDigitalSignatureDto;
}
