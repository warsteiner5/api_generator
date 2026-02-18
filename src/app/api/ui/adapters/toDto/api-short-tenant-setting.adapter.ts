import { ShortTenantSettingAlt } from '../../models/short-tenant-setting-alt.interface';
import { ApiShortTenantSettingAltDto } from '../../../swagger/models/api-short-tenant-setting';
import { adaptApiTenantFlowTypeAltEnum } from './api-tenant-flow-type.adapter';
import { adaptApiTradeLotApplicationDocumentTypeEnum } from './api-trade-lot-application-document-type-enum.adapter';

export function adaptApiShortTenantSettingAltDto(source?: ShortTenantSettingAlt | null): ApiShortTenantSettingAltDto {
  return {
    IsChatEnable: source?.isChatEnable,
    IsDocumentAttachRequired: source?.isDocumentAttachRequired,
    IsProposalDocsRequired: source?.isProposalDocsRequired,
    MaxApplicationAmount: source?.maxApplicationAmount,
    MonetizationMarketWithoutNmz: source?.monetizationMarketWithoutNmz,
    RequiredTradeLotApplicationDocumentTypes: (source?.requiredTradeLotApplicationDocumentTypes ?? []).map((item) => adaptApiTradeLotApplicationDocumentTypeEnum(item)),
    TenantFlowType: adaptApiTenantFlowTypeAltEnum(source?.tenantFlowType),
  };
}
