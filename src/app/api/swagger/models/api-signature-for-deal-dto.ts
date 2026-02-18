/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiSignatureForDealDto {
  DealObject?: ApiDealObjectEnum;
  ExecutionTo?: string | null;
  PowerOfAttorneyId?: string | null;
  budgetid?: number | null;
  dealId?: number;
  signatureForDealFilesObject?: ({
[key: string]: string;
}) | null;
  signatureForDealObject?: string | null;
  signdata?: string | null;
}
