import { ApiSignatureObjectDto } from '../../../swagger/models/api-signature-object-dto';
import { SignatureObject } from '../../models/signature-object.interface';

export function adaptSignatureObjectToUI(source?: ApiSignatureObjectDto | null): SignatureObject {
  return {
    data: source?.data ?? '',
    isDetached: source?.isDetached ?? false,
    signature: source?.signature ?? '',
  };
}
