import { ApiUpdateBaseInfoFileToSignDto } from '../../../swagger/models/api-update-base-info-file-to-sign-dto';
import { UpdateBaseInfoFileToSign } from '../../models/update-base-info-file-to-sign.interface';

export const updateBaseInfoFileToSignAdapter = (source?: ApiUpdateBaseInfoFileToSignDto | null): UpdateBaseInfoFileToSign => {
  return {
    fileDataToSign: source?.FileDataToSign,
    fileGuid: source?.FileGuid,
    isHash: source?.IsHash,
  };
}
