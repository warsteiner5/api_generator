import { ApiMarketOrganizationSettingsAltDto } from '../../../swagger/models/api-market-organization-settings';
import { MarketOrganizationSettingsAlt } from '../../models/market-organization-settings-alt.interface';
import { adaptHideApplicationSettingsToUI } from './hide-application-settings.adapter';
import { adaptM4DDealSignRequiredEnumToUI } from './m-4-d-deal-sign-required-enum.adapter';
import { adaptSignatureStampFormatEnumToUI } from './signature-stamp-format-enum.adapter';

export function adaptMarketOrganizationSettingsAltToUI(source?: ApiMarketOrganizationSettingsAltDto | null): MarketOrganizationSettingsAlt {
  return {
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors ?? false,
    autoProlongationEnabled: source?.AutoProlongationEnabled ?? false,
    hideApplicationSettings: adaptHideApplicationSettingsToUI(source?.HideApplicationSettings),
    isSendToEis: source?.IsSendToEis ?? false,
    poaRequiredState: adaptM4DDealSignRequiredEnumToUI(source?.PoaRequiredState),
    preventEisProtocolPublish: source?.PreventEisProtocolPublish ?? false,
    showProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis ?? false,
    showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis ?? false,
    signatureStampFormat: adaptSignatureStampFormatEnumToUI(source?.SignatureStampFormat),
    surpervisorHost: source?.SurpervisorHost ?? '',
  };
}
