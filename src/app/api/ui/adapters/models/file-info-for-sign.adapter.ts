import { ApiFileInfoForSignDto } from '../../../swagger/models/api-file-info-for-sign-dto';
import { FileInfoForSign } from '../../models/file-info-for-sign.interface';

export const fileInfoForSignAdapter = (source?: ApiFileInfoForSignDto | null): FileInfoForSign => {
  return {
    fileDataToSign: source?.FileDataToSign,
    fileGuid: source?.FileGuid,
    isHash: source?.IsHash,
  };
}
