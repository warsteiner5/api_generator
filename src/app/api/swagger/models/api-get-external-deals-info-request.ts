/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiGetExternalDealsInfoRequestAltDto {
  DealIds?: Array<number> | null;
  DealObject?: ApiDealObjectEnum;
  ExternalSystemId?: number;
}
