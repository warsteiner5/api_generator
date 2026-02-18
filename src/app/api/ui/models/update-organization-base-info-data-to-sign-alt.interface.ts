import { UpdateBaseInfoFileToSign } from './update-base-info-file-to-sign.interface';

export interface UpdateOrganizationBaseInfoDataToSignAlt {
  commonRequestGuid: string;
  dataToSign: string;
  files: UpdateBaseInfoFileToSign[];
}
