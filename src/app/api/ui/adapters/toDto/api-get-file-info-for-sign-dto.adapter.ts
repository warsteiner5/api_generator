import { GetFileInfoForSign } from '../../models/get-file-info-for-sign.interface';
import { ApiGetFileInfoForSignDto } from '../../../swagger/models/api-get-file-info-for-sign-dto';

export function adaptApiGetFileInfoForSignDto(source?: GetFileInfoForSign | null): ApiGetFileInfoForSignDto {
  return {
    Id: source?.id,
    SignatureAlgorithmOid: source?.signatureAlgorithmOid,
  };
}
