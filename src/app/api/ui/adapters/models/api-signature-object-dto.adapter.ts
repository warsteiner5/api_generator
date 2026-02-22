import { SignatureObject } from '../../models/signature-object.interface';
import { ApiSignatureObjectDto } from '../../../swagger/models/api-signature-object-dto';

export const apiSignatureObjectDtoAdapter = (source?: SignatureObject | null): ApiSignatureObjectDto => {
  return {
    data: source?.data,
    isDetached: source?.isDetached,
    signature: source?.signature,
  };
}
