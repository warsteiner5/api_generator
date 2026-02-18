import { FileInfoForSign } from '../../models/file-info-for-sign.interface';
import { ApiFileInfoForSignDto } from '../../../swagger/models/api-file-info-for-sign-dto';

export function adaptApiFileInfoForSignDto(source?: FileInfoForSign | null): ApiFileInfoForSignDto {
  return {
    FileDataToSign: source?.fileDataToSign,
    FileGuid: source?.fileGuid,
    IsHash: source?.isHash,
  };
}
