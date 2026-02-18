/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiDealInfoRequestDto {
  CertThumbprint?: string | null;
  DealObject?: ApiDealObjectEnum;
  FileGuids?: Array<string> | null;
  Id?: number;
  SignatureAlgorithmOid?: string | null;
  SignedData?: string | null;
}
