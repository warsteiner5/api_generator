/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiDifferenceDealProtocolAltDto {
  ChatId?: number;
  DealObject?: ApiDealObjectEnum;
  DocumentGuids?: Array<string> | null;
  Id?: number;
  Reason?: string | null;
}
