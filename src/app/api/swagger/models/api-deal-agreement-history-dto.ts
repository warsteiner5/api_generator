/* tslint:disable */
/* eslint-disable */
import { ApiDealAgreementDetailDto } from '../models/api-deal-agreement-detail-dto';
import { ApiDealAgreementHistoryStateEnum } from '../models/api-deal-agreement-history-state-enum';
import { ApiDealAgreementHistoryTypeEnum } from '../models/api-deal-agreement-history-type-enum';
export interface ApiDealAgreementHistoryDto {
  AgreementState?: ApiDealAgreementHistoryStateEnum;
  BuyerOrgId?: number;
  DateTimeCreated?: string;
  DealChangeDetails?: Array<ApiDealAgreementDetailDto> | null;
  DealId?: number;
  Id?: number;
  SellerOrgId?: number;
  Type?: ApiDealAgreementHistoryTypeEnum;
}
