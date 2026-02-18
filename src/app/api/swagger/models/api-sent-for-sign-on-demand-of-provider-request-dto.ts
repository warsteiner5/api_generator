/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentDto } from '../models/api-deal-document-dto';
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiSentForSignOnDemandOfProviderRequestDto {
  ApplicationId?: number;
  ContractExecutionDate?: string | null;
  DealComment?: string | null;
  DealCustomNumber?: string | null;
  DealObject?: ApiDealObjectEnum;
  Documents?: Array<ApiDealDocumentDto> | null;
  OrganizationId?: number;
  Price?: number | null;
  TradeId?: number;
  TradeLotId?: number;
}
