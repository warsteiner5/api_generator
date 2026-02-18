/* tslint:disable */
/* eslint-disable */
import { ApiExternalDealCardDocumentDto } from '../models/api-external-deal-card-document-dto';
import { ApiExternalDealCardLotItemDto } from '../models/api-external-deal-card-lot-item-dto';
import { ApiExternalDealCardSupplierDto } from '../models/api-external-deal-card-supplier-dto';
export interface ApiExternalDealCardDto {
  CurrencyCode?: string | null;
  DealAgreemntDate?: string | null;
  DealNumber?: string | null;
  Documents?: Array<ApiExternalDealCardDocumentDto> | null;
  EndExecutionDate?: string | null;
  Id?: number;
  LotItems?: Array<ApiExternalDealCardLotItemDto> | null;
  Price?: number | null;
  SignedOutOfEpReason?: string | null;
  StartExecutionDate?: string | null;
  SubjectContract?: string | null;
  Supplier?: ApiExternalDealCardSupplierDto | null;
  TradeIdentificationCode?: string | null;
}
