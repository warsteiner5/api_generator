/* tslint:disable */
/* eslint-disable */
import { ApiTruTypeEnum } from '../models/api-tru-type-enum';
export interface ApiOrderDetailAltDto {
  CartItemId?: string | null;
  DeliveryPlace?: string | null;
  DeliveryTerms?: string | null;
  KladrRegionCode?: string | null;
  KsrCode?: string | null;
  KsrUnitQuantity?: number | null;
  OfferId?: number;
  Quantity?: number | null;
  Type?: ApiTruTypeEnum | null;
  UnitPrice?: number | null;
  UnitPriceRegion?: string | null;
}
