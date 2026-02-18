/* tslint:disable */
/* eslint-disable */
import { ApiDeliveryRegionInfoDto } from '../models/api-delivery-region-info-dto';
import { ApiPriceListStateEnum } from '../models/api-price-list-state-enum';
export interface ApiEditMzPriceListDto {
  AutoUpdateScheduleState?: number;
  BelongedToTenantId?: number | null;
  Company?: string | null;
  CreatedUserId?: number | null;
  CronExpr?: string | null;
  DeliveryRegionInfos?: Array<ApiDeliveryRegionInfoDto> | null;
  ExpirationDateTime?: string | null;
  ExternalId?: string | null;
  Id?: number;
  IsAutoUpdated?: boolean;
  IsExportProduct?: boolean;
  IsHidden?: boolean;
  Name?: string | null;
  OrganizationId?: number;
  State?: ApiPriceListStateEnum;
  Url?: string | null;
}
