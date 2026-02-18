import { TenantFlowTypeAltEnum } from '../enums/tenant-flow-type-alt.enum';
import { TradeLotApplicationDocumentTypeEnum } from '../enums/trade-lot-application-document-type.enum';

export interface ShortTenantSettingAlt {
  isChatEnable: boolean;
  isDocumentAttachRequired: boolean;
  isProposalDocsRequired: boolean;
  maxApplicationAmount: number;
  monetizationMarketWithoutNmz: boolean;
  requiredTradeLotApplicationDocumentTypes: TradeLotApplicationDocumentTypeEnum[];
  tenantFlowType: TenantFlowTypeAltEnum;
}
