import { ApiGetFileInfoForSignDto } from '../../../swagger/models/api-get-file-info-for-sign-dto';
import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';

export const getFileInfoForSignAdapter = (source?: ApiGetFileInfoForSignDto | null): GetFileInfoForSign => {
  return {
    id: source?.Id,
    signatureAlgorithmOid: source?.SignatureAlgorithmOid,
  };
}
