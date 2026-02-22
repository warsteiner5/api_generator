import { ApiShortTenantSettingAltDto } from '../../../swagger/models/api-short-tenant-setting';
import { ShortTenantSettingAlt } from '../../models/short-tenant-setting-alt.interface';
import { tenantFlowTypeAltEnumAdapter } from '../enums/tenant-flow-type-alt-enum.adapter';
import { tradeLotApplicationDocumentTypeEnumAdapter } from '../enums/trade-lot-application-document-type-enum.adapter';

export const shortTenantSettingAltAdapter = (source?: ApiShortTenantSettingAltDto | null): ShortTenantSettingAlt => {
  return {
    isChatEnable: source?.IsChatEnable,
    isDocumentAttachRequired: source?.IsDocumentAttachRequired,
    isProposalDocsRequired: source?.IsProposalDocsRequired,
    maxApplicationAmount: source?.MaxApplicationAmount,
    monetizationMarketWithoutNmz: source?.MonetizationMarketWithoutNmz,
    requiredTradeLotApplicationDocumentTypes: source?.RequiredTradeLotApplicationDocumentTypes?.map((item) => tradeLotApplicationDocumentTypeEnumAdapter(item)),
    tenantFlowType: source?.TenantFlowType === null ? undefined : tenantFlowTypeAltEnumAdapter(source?.TenantFlowType),
  };
}
