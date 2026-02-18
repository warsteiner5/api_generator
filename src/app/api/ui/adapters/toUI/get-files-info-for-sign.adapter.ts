import { ApiGetFilesInfoForSignDto } from '../../../swagger/models/api-get-files-info-for-sign-dto';
import { GetFilesInfoForSign } from '../../models/get-files-info-for-sign.interface';

export function adaptGetFilesInfoForSignToUI(source?: ApiGetFilesInfoForSignDto | null): GetFilesInfoForSign {
  return {
    ids: source?.Ids ?? [],
    signatureAlgorithmOid: source?.SignatureAlgorithmOid ?? '',
  };
}
