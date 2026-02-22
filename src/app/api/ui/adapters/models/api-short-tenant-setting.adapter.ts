import { ShortTenantSettingAlt } from '../../models/short-tenant-setting-alt.interface';
import { ApiShortTenantSettingAltDto } from '../../../swagger/models/api-short-tenant-setting';
import { apiTenantFlowTypeAltEnumAdapter } from '../enums/api-tenant-flow-type.adapter';
import { apiTradeLotApplicationDocumentTypeEnumAdapter } from '../enums/api-trade-lot-application-document-type-enum.adapter';

export const apiShortTenantSettingAltDtoAdapter = (source?: ShortTenantSettingAlt | null): ApiShortTenantSettingAltDto => {
  return {
    IsChatEnable: source?.isChatEnable,
    IsDocumentAttachRequired: source?.isDocumentAttachRequired,
    IsProposalDocsRequired: source?.isProposalDocsRequired,
    MaxApplicationAmount: source?.maxApplicationAmount,
    MonetizationMarketWithoutNmz: source?.monetizationMarketWithoutNmz,
    RequiredTradeLotApplicationDocumentTypes: source?.requiredTradeLotApplicationDocumentTypes?.map((item) => apiTradeLotApplicationDocumentTypeEnumAdapter(item)),
    TenantFlowType: source?.tenantFlowType === null ? undefined : apiTenantFlowTypeAltEnumAdapter(source?.tenantFlowType),
  };
}
