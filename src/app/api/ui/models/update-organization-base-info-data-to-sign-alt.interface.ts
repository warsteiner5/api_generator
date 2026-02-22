import { UpdateBaseInfoFileToSign } from './update-base-info-file-to-sign.interface';

// @ts-ignore
export interface UpdateOrganizationBaseInfoDataToSignAlt {
  commonRequestGuid: string;
  dataToSign: string;
  files: UpdateBaseInfoFileToSign[];
}
