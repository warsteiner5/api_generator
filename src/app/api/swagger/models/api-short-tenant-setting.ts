/* tslint:disable */
/* eslint-disable */
import { ApiTenantFlowTypeAltEnum } from '../models/api-tenant-flow-type';
import { ApiTradeLotApplicationDocumentTypeEnum } from '../models/api-trade-lot-application-document-type-enum';
export interface ApiShortTenantSettingAltDto {
  IsChatEnable?: boolean;
  IsDocumentAttachRequired?: boolean;
  IsProposalDocsRequired?: boolean;
  MaxApplicationAmount?: number;
  MonetizationMarketWithoutNmz?: boolean;
  RequiredTradeLotApplicationDocumentTypes?: Array<ApiTradeLotApplicationDocumentTypeEnum> | null;
  TenantFlowType?: ApiTenantFlowTypeAltEnum;
}
