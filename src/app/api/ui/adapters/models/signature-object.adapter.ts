import { ApiSignatureObjectDto } from '../../../swagger/models/api-signature-object-dto';
import { SignatureObject } from '../../models/signature-object.interface';

export const signatureObjectAdapter = (source?: ApiSignatureObjectDto | null): SignatureObject => {
  return {
    data: source?.data,
    isDetached: source?.isDetached,
    signature: source?.signature,
  };
}
