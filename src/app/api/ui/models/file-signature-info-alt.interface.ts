import { ApplicationsEnum } from '../enums/applications.enum';

// @ts-ignore
export interface FileSignatureInfoAlt {
  application: ApplicationsEnum;
  certificateThumbprint: string;
  signatureDownloadUrl: string;
}
