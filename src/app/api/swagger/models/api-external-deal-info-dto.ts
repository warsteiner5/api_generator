/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentDto } from '../models/api-deal-document-dto';
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
export interface ApiExternalDealInfoDto {
  ConclusionDate?: string | null;
  CustomerOrganizationFullName?: string | null;
  CustomerOrganizationPostalAddress?: string | null;
  CustomerOrganizationRegNumber?: string | null;
  DealCustomNumber?: string | null;
  Documents?: Array<ApiDealDocumentDto> | null;
  ExecutionFrom?: string | null;
  ExecutionTo?: string | null;
  Id?: number;
  IsElectronicForm?: boolean;
  ParticipantOrganizationId?: string | null;
  ParticipantOrganizationName?: string | null;
  Price?: number | null;
  SignByCustomer?: string | null;
  SignBySupplier?: string | null;
  State?: ApiDealStateEnum;
  TradeName?: string | null;
  TradeNotificationNumber?: string | null;
}
