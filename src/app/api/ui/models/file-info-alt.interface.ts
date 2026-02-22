import { FileSignatureInfoAlt } from './file-signature-info-alt.interface';

// @ts-ignore
export interface FileInfoAlt {
  comment: string;
  compressed: boolean;
  contentType: number;
  createDateTime: string;
  createUserId: number;
  downloadUrl: string;
  guid: string;
  hash: string;
  isSigned: boolean;
  lastChangeDateTime: string;
  lastChangeUserId: number;
  link: string;
  name: string;
  revisionNumber: number;
  signatureInfos: FileSignatureInfoAlt[];
  size: number;
  tag: string;
  type: string;
  virusCheckState: number;
}
