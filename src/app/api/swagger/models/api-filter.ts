/* tslint:disable */
/* eslint-disable */
import { ApiStarPurchaseTypeEnum } from '../models/api-star-purchase-type-enum';
export interface ApiFilterAltDto {
  AvailableTenantKeys?: Array<number> | null;
  BusinessFlowTypes?: Array<number> | null;
  CategoryIds?: Array<string> | null;
  CollectingEndDateEnd?: string | null;
  CollectingEndDateStart?: string | null;
  CountryCodes?: Array<string> | null;
  DeliveryRegionIds?: Array<number> | null;
  ETPCodes?: Array<string> | null;
  HasPhoto?: boolean | null;
  InnOrganizers?: string | null;
  IsExactMatch?: boolean;
  IsFromManufacturerOnly?: boolean | null;
  IsImmediate?: boolean | null;
  IsImportPhaseout?: boolean | null;
  IsMarketOffer?: boolean | null;
  IsSearch223?: boolean;
  IsSearch44?: boolean;
  IsSearch615?: boolean;
  IsSearchAttachment?: boolean;
  IsSearchCOM?: boolean;
  IsSearchZMO?: boolean;
  IsSmp?: boolean | null;
  LotStateIds?: Array<number> | null;
  NMCFrom?: number | null;
  NMCTo?: number | null;
  NotSourceTenantIds?: Array<number> | null;
  OKPD2Codes?: Array<string> | null;
  ProductionRegionCodes?: Array<string> | null;
  PublishDateEnd?: string | null;
  PublishDateStart?: string | null;
  PwsIds?: Array<ApiStarPurchaseTypeEnum> | null;
  RegionIds?: Array<number> | null;
  SourceIds?: Array<number> | null;
  SourceTenantIds?: Array<number> | null;
}
