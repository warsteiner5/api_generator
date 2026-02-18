/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiChangeDealBySupplierRequestAltDto {
  ChatId?: number;
  DealId?: number;
  DealObject?: ApiDealObjectEnum;
  DocumentGuids?: Array<string> | null;
  PowerOfAttorneyId?: string | null;
  signatureForDealFilesObject?: ({
[key: string]: string;
}) | null;
  signatureForDealObject?: string | null;
  signdata?: string | null;
}
