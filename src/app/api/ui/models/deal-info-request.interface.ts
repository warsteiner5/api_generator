import { DealObjectEnum } from '../enums/deal-object.enum';

// @ts-ignore
export interface DealInfoRequest {
  certThumbprint: string;
  dealObject: DealObjectEnum;
  fileGuids: string[];
  id: number;
  signatureAlgorithmOid: string;
  signedData: string;
}
