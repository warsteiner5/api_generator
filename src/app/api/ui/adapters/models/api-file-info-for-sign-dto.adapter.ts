import { FileInfoForSign } from '../../models/file-info-for-sign.interface';
import { ApiFileInfoForSignDto } from '../../../swagger/models/api-file-info-for-sign-dto';

export const apiFileInfoForSignDtoAdapter = (source?: FileInfoForSign | null): ApiFileInfoForSignDto => {
  return {
    FileDataToSign: source?.fileDataToSign,
    FileGuid: source?.fileGuid,
    IsHash: source?.isHash,
  };
}
