import { ApiGetFileInfoForSignDto } from '../../../swagger/models/api-get-file-info-for-sign-dto';
import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';

export function adaptGetFileInfoForSignToUI(source?: ApiGetFileInfoForSignDto | null): GetFileInfoForSign {
  return {
    id: source?.Id ?? '',
    signatureAlgorithmOid: source?.SignatureAlgorithmOid ?? '',
  };
}
