import { UpdateBaseInfoFileToSign } from '../../models/update-base-info-file-to-sign.interface';
import { ApiUpdateBaseInfoFileToSignDto } from '../../../swagger/models/api-update-base-info-file-to-sign-dto';

export const apiUpdateBaseInfoFileToSignDtoAdapter = (source?: UpdateBaseInfoFileToSign | null): ApiUpdateBaseInfoFileToSignDto => {
  return {
    FileDataToSign: source?.fileDataToSign,
    FileGuid: source?.fileGuid,
    IsHash: source?.isHash,
  };
}
