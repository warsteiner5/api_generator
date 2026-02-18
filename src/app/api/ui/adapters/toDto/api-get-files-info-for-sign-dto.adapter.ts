import { GetFilesInfoForSign } from '../../models/get-files-info-for-sign.interface';
import { ApiGetFilesInfoForSignDto } from '../../../swagger/models/api-get-files-info-for-sign-dto';

export function adaptApiGetFilesInfoForSignDto(source?: GetFilesInfoForSign | null): ApiGetFilesInfoForSignDto {
  return {
    Ids: source?.ids ?? [],
    SignatureAlgorithmOid: source?.signatureAlgorithmOid,
  };
}
