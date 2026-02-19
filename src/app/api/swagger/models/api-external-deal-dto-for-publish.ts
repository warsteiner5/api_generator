/* tslint:disable */
/* eslint-disable */
import { ApiExternalDealInfoDocumentForPublishAltDto } from '../models/api-external-deal-info-document-for-publish';
import { ApiExternalDealInfoItemForPublishAltDto } from '../models/api-external-deal-info-item-for-publish';
import { ApiExternalDealSupplierForPublishAltDto } from '../models/api-external-deal-supplier-for-publish';
export interface ApiExternalDealDtoForPublish {
  DealAgreemntDate?: string | null;
  DealNumber?: string | null;
  Documents?: Array<ApiExternalDealInfoDocumentForPublishAltDto> | null;
  EndExecutionDate?: string;
  ExternalDealInfoItems?: Array<ApiExternalDealInfoItemForPublishAltDto> | null;
  Price?: number;
  SignedOutOfEpReason?: string | null;
  StartExecutionDate?: string;
  SubjectContract?: string | null;
  Supplier?: ApiExternalDealSupplierForPublishAltDto | null;
  TradeIdentificationCode?: string | null;
}
