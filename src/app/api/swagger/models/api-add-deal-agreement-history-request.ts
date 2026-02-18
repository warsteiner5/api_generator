/* tslint:disable */
/* eslint-disable */
import { ApiDealAgreementHistoryTypeEnum } from '../models/api-deal-agreement-history-type-enum';
import { ApiFileInfoAltDto } from '../models/api-file-info';
export interface ApiAddDealAgreementHistoryRequestAltDto {
  BuyerId?: number;
  DealAgreementDocuments?: Array<ApiFileInfoAltDto> | null;
  DealId?: number;
  OwnerId?: number;
  SellerId?: number;
  TradeId?: number;
  Type?: ApiDealAgreementHistoryTypeEnum;
}
