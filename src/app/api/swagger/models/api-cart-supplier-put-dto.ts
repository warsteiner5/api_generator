/* tslint:disable */
/* eslint-disable */
import { ApiCartItemDocumentDto } from '../models/api-cart-item-document-dto';
export interface ApiCartSupplierPutDto {
  Comment?: string | null;
  Documents?: Array<ApiCartItemDocumentDto> | null;
  IsDigitalFillingForm?: boolean;
  IsFederalLawsEnable?: boolean;
  OrderName?: string | null;
  PlanedDealSignDate?: string | null;
  ZmoFinanceSource?: number | null;
  ZmoFzType?: number | null;
}
