import { ApiMarketOrganizationSettingsAltDto } from '../../../swagger/models/api-market-organization-settings';
import { MarketOrganizationSettingsAlt } from '../../models/market-organization-settings-alt.interface';
import { hideApplicationSettingsAdapter } from './hide-application-settings.adapter';
import { m4DDealSignRequiredEnumAdapter } from '../enums/m-4-d-deal-sign-required-enum.adapter';
import { signatureStampFormatEnumAdapter } from '../enums/signature-stamp-format-enum.adapter';

export const marketOrganizationSettingsAltAdapter = (source?: ApiMarketOrganizationSettingsAltDto | null): MarketOrganizationSettingsAlt => {
  return {
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors,
    autoProlongationEnabled: source?.AutoProlongationEnabled,
    hideApplicationSettings: source?.HideApplicationSettings === null ? undefined : hideApplicationSettingsAdapter(source?.HideApplicationSettings),
    isSendToEis: source?.IsSendToEis,
    poaRequiredState: source?.PoaRequiredState === null ? undefined : m4DDealSignRequiredEnumAdapter(source?.PoaRequiredState),
    preventEisProtocolPublish: source?.PreventEisProtocolPublish,
    showProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
    signatureStampFormat: source?.SignatureStampFormat === null ? undefined : signatureStampFormatEnumAdapter(source?.SignatureStampFormat),
    surpervisorHost: source?.SurpervisorHost,
  };
}
