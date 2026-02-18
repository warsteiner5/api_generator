/* tslint:disable */
/* eslint-disable */
import { ApiOrderAltDto } from '../models/api-order';
export interface ApiOrderFromCartAltDto {
  CartId?: string;
  DeliveryPlace?: string | null;
  DeliveryTerms?: string | null;
  KladrRegionCode?: string | null;
  Orders?: Array<ApiOrderAltDto> | null;
}
