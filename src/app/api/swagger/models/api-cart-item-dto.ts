/* tslint:disable */
/* eslint-disable */
import { ApiCartItemDocumentDto } from '../models/api-cart-item-document-dto';
export interface ApiCartItemDto {
  Comment?: string | null;
  CreatedOn?: string;
  CustomerPrice?: number | null;
  DeliveryAddress?: string | null;
  DeliveryTime?: string | null;
  Documents?: Array<ApiCartItemDocumentDto> | null;
  Id?: string;
  IsActual?: boolean;
  IsChecked?: boolean;
  IsDigitalFillingForm?: boolean;
  IsFavorite?: boolean;
  IsFederalLawsEnable?: boolean;
  KladrRegionCode?: string | null;
  KsrCode?: string | null;
  KsrName?: string | null;
  KsrUnit?: string | null;
  LastModificationDate?: string;
  MainPictureId?: string | null;
  MeasureUnit?: string | null;
  OrderName?: string | null;
  OriginPrice?: number | null;
  ParticipantOfferId?: number;
  PlanedDealSignDate?: string | null;
  Price?: number | null;
  ProductName?: string | null;
  Quantity?: number;
  SupplierOrganizationGuid?: string;
  SupplierOrganizationId?: number | null;
  SupplierOrganizationInn?: string | null;
  SupplierOrganizationName?: string | null;
  SupplierOrganizationSource?: number | null;
  ZmoFinanceSource?: number | null;
  ZmoFzType?: number | null;
}
