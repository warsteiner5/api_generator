import { ApiShortTenantSettingAltDto } from '../../../swagger/models/api-short-tenant-setting';
import { ShortTenantSettingAlt } from '../../models/short-tenant-setting-alt.interface';
import { adaptTenantFlowTypeAltEnumToUI } from './tenant-flow-type-alt-enum.adapter';
import { adaptTradeLotApplicationDocumentTypeEnumToUI } from './trade-lot-application-document-type-enum.adapter';

export function adaptShortTenantSettingAltToUI(source?: ApiShortTenantSettingAltDto | null): ShortTenantSettingAlt {
  return {
    isChatEnable: source?.IsChatEnable ?? false,
    isDocumentAttachRequired: source?.IsDocumentAttachRequired ?? false,
    isProposalDocsRequired: source?.IsProposalDocsRequired ?? false,
    maxApplicationAmount: source?.MaxApplicationAmount ?? 0,
    monetizationMarketWithoutNmz: source?.MonetizationMarketWithoutNmz ?? false,
    requiredTradeLotApplicationDocumentTypes: (source?.RequiredTradeLotApplicationDocumentTypes ?? []).map((item) => adaptTradeLotApplicationDocumentTypeEnumToUI(item)),
    tenantFlowType: adaptTenantFlowTypeAltEnumToUI(source?.TenantFlowType),
  };
}
