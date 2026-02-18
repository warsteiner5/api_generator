/* tslint:disable */
/* eslint-disable */
import { ApiDealInfoAltDto } from '../models/api-deal-info';
export interface ApiApiSearchResultOfDealInfoAltDto {
  currpage?: number;
  invdata?: Array<ApiDealInfoAltDto> | null;
  showTotal?: boolean;
  totalpages?: number;
  totalrecords?: number;
}
