/* tslint:disable */
/* eslint-disable */
import { ApiTradeLotCustomerDeliveryRegionCodesDto } from '../models/api-trade-lot-customer-delivery-region-codes-dto';
export interface ApiTradeLotCustomerDto {
  ApplicationAmount?: number | null;
  CustomerId?: number | null;
  DeliveryConditions?: string | null;
  DeliveryPlace?: string | null;
  DeliveryRegionCode?: string | null;
  DeliveryRegionCodes?: Array<ApiTradeLotCustomerDeliveryRegionCodesDto> | null;
  PlanGuid?: string;
  PlanPositionNumber?: string | null;
  PlanRegistrationNumber?: string | null;
  PositionGuid?: string;
}
