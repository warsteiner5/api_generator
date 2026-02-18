/* tslint:disable */
/* eslint-disable */
import { ApiExternalDealDocumentDto } from '../models/api-external-deal-document-dto';
import { ApiExternalDealInfoStateEnum } from '../models/api-external-deal-info-state-enum';
import { ApiExternalDealItemDto } from '../models/api-external-deal-item-dto';
import { ApiExternalDealSupplierDto } from '../models/api-external-deal-supplier-dto';
import { ApiSignedOutOfEpReasonTypeEnum } from '../models/api-signed-out-of-ep-reason-type-enum';
export interface ApiExternalDealDto {
  DealAgreementDate?: string | null;
  DealNumber?: string | null;
  Documents?: Array<ApiExternalDealDocumentDto> | null;
  EndExecutionDate?: string | null;
  Id?: number | null;
  IsExecutionBeforeAgreementDate?: boolean;
  Items?: Array<ApiExternalDealItemDto> | null;
  Price?: number | null;
  PriceWarningMessage?: string | null;
  SignedOutOfEpReason?: string | null;
  SignedOutOfEpReasonType?: ApiSignedOutOfEpReasonTypeEnum | null;
  StartExecutionDate?: string | null;
  State?: ApiExternalDealInfoStateEnum;
  SubjectContract?: string | null;
  Supplier?: ApiExternalDealSupplierDto | null;
  TradeNumber?: string | null;
  TradePrice?: number;
}
