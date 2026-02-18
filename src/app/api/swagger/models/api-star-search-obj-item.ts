/* tslint:disable */
/* eslint-disable */
import { ApiPurchaseObjectCardAltDto } from '../models/api-purchase-object-card';
export interface ApiStarSearchObjItemAltDto {
  AdditionalNumbers?: Array<string> | null;
  AttachmentSearchResultInfo?: string | null;
  EtpsId?: number;
  MarketPlaceNumber?: string | null;
  MarketPlaceNumberInt?: number;
  MarketPlaceTenderId?: number;
  PurchaseName?: string | null;
  RawMaxPrice?: number;
  Region?: string | null;
  RegionId?: number | null;
  TRU?: Array<ApiPurchaseObjectCardAltDto> | null;
}
