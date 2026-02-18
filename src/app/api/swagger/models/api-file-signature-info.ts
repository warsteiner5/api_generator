/* tslint:disable */
/* eslint-disable */
import { ApiApplicationsEnum } from '../models/api-applications-enum';
export interface ApiFileSignatureInfoAltDto {
  Application?: ApiApplicationsEnum;
  CertificateThumbprint?: string | null;
  SignatureDownloadUrl?: string | null;
}
