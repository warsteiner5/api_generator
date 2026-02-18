import { ApplicationsEnum } from '../enums/applications.enum';

export interface FileSignatureInfoAlt {
  application: ApplicationsEnum;
  certificateThumbprint: string;
  signatureDownloadUrl: string;
}
