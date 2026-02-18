import { MarketOrganizationSettingsAlt } from '../../models/market-organization-settings-alt.interface';
import { ApiMarketOrganizationSettingsAltDto } from '../../../swagger/models/api-market-organization-settings';
import { adaptApiHideApplicationSettingsDto } from './api-hide-application-settings-dto.adapter';
import { adaptApiM4DDealSignRequiredEnum } from './api-m-4-d-deal-sign-required-enum.adapter';
import { adaptApiSignatureStampFormatEnum } from './api-signature-stamp-format-enum.adapter';

export function adaptApiMarketOrganizationSettingsAltDto(source?: MarketOrganizationSettingsAlt | null): ApiMarketOrganizationSettingsAltDto {
  return {
    AlwaysSendInvitationsForVendors: source?.alwaysSendInvitationsForVendors,
    AutoProlongationEnabled: source?.autoProlongationEnabled,
    HideApplicationSettings: adaptApiHideApplicationSettingsDto(source?.hideApplicationSettings),
    IsSendToEis: source?.isSendToEis,
    PoaRequiredState: adaptApiM4DDealSignRequiredEnum(source?.poaRequiredState),
    PreventEisProtocolPublish: source?.preventEisProtocolPublish,
    ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
    SignatureStampFormat: adaptApiSignatureStampFormatEnum(source?.signatureStampFormat),
    SurpervisorHost: source?.surpervisorHost,
  };
}
