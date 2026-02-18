/* tslint:disable */
/* eslint-disable */
import { ApiCartItemDto } from '../models/api-cart-item-dto';
export interface ApiCartDto {
  BusinessOperatorId?: number;
  ClientSessionId?: string | null;
  CreatedOn?: string;
  DeliveryAddress?: string | null;
  DeliveryTime?: string | null;
  EmployeeId?: number | null;
  Id?: string;
  IsFederalLawsEnable?: boolean;
  Items?: Array<ApiCartItemDto> | null;
  KladrRegionCode?: string | null;
  LastModificationDate?: string;
  ZmoFinanceSource?: number | null;
  ZmoFzType?: number | null;
}
