import { DigitalSignature } from '../../models/digital-signature.interface';
import { ApiDigitalSignatureDto } from '../../../swagger/models/api-digital-signature-dto';

export const apiDigitalSignatureDtoAdapter = (source?: DigitalSignature | null): ApiDigitalSignatureDto => {
  return (source ?? {}) as ApiDigitalSignatureDto;
}
