/* tslint:disable */
/* eslint-disable */
import { ApiExternalDealDocumentDto } from '../models/api-external-deal-document-dto';
import { ApiExternalDealItemDto } from '../models/api-external-deal-item-dto';
import { ApiExternalDealSupplierDto } from '../models/api-external-deal-supplier-dto';
export interface ApiDealOutsideEShopDto {
  DealAgreemntDate?: string | null;
  DealNumber?: string | null;
  Documents?: Array<ApiExternalDealDocumentDto> | null;
  EndExecutionDate?: string | null;
  Items?: Array<ApiExternalDealItemDto> | null;
  Price?: number | null;
  SignedOutOfEpReason?: string | null;
  StartExecutionDate?: string | null;
  SubjectContract?: string | null;
  Supplier?: ApiExternalDealSupplierDto | null;
  TradeNumber?: string | null;
  TradePrice?: number;
}
