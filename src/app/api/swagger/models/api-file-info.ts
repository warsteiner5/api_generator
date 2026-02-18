/* tslint:disable */
/* eslint-disable */
import { ApiFileSignatureInfoAltDto } from '../models/api-file-signature-info';
export interface ApiFileInfoAltDto {
  Comment?: string | null;
  Compressed?: boolean;
  ContentType?: number;
  CreateDateTime?: string;
  CreateUserId?: number | null;
  DownloadUrl?: string | null;
  Guid?: string;
  Hash?: string | null;
  IsSigned?: boolean;
  LastChangeDateTime?: string;
  LastChangeUserId?: number | null;
  Link?: string | null;
  Name?: string | null;
  RevisionNumber?: number;
  SignatureInfos?: Array<ApiFileSignatureInfoAltDto> | null;
  Size?: number;
  Tag?: string | null;
  Type?: string | null;
  VirusCheckState?: number;
}
