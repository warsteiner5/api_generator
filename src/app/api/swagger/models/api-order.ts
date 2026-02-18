/* tslint:disable */
/* eslint-disable */
import { ApiAdditionalRequirementAltDto } from '../models/api-additional-requirement';
import { ApiContactInformationDto } from '../models/api-contact-information-dto';
import { ApiDeliveryMethodAltEnum } from '../models/api-delivery-method';
import { ApiOrderDetailAltDto } from '../models/api-order-detail';
import { ApiOrderDocumentDto } from '../models/api-order-document-dto';
import { ApiZmoFinanceSourceEnum } from '../models/api-zmo-finance-source-enum';
export interface ApiOrderAltDto {
  AdditionalRequirements?: Array<ApiAdditionalRequirementAltDto> | null;
  Comment?: string | null;
  ContactInfo?: ApiContactInformationDto | null;
  CurrencyCode?: string | null;
  DealConclusionTermInfo?: string | null;
  DeliveryMethod?: ApiDeliveryMethodAltEnum;
  DeliveryPlace?: string | null;
  DeliveryTerms?: string | null;
  Description?: string | null;
  Id?: number;
  InitialPrice?: number | null;
  IsAutoCompleteDeal?: boolean;
  IsContractInElectronicForm?: boolean | null;
  IsCustomPrice?: boolean | null;
  IsFederalLawsEnable?: boolean;
  IsParentContractNumberNotSpecified?: boolean | null;
  IsSanctionedPurchase?: boolean | null;
  IsUnitBidding?: boolean;
  KladrRegionCode?: string | null;
  MaxDealPrice?: number | null;
  OrderDetails?: Array<ApiOrderDetailAltDto> | null;
  OrderDocuments?: Array<ApiOrderDocumentDto> | null;
  OrderName?: string | null;
  ParentContractNumber?: string | null;
  ParentNotTookPlaceTradeId?: number | null;
  PlanedDealSignDate?: string | null;
  ZmoFinanceSource?: ApiZmoFinanceSourceEnum | null;
  ZmoFzType?: number | null;
}
