import { MarketOrganizationSettingsAlt } from '../../models/market-organization-settings-alt.interface';
import { ApiMarketOrganizationSettingsAltDto } from '../../../swagger/models/api-market-organization-settings';
import { apiHideApplicationSettingsDtoAdapter } from './api-hide-application-settings-dto.adapter';
import { apiM4DDealSignRequiredEnumAdapter } from '../enums/api-m-4-d-deal-sign-required-enum.adapter';
import { apiSignatureStampFormatEnumAdapter } from '../enums/api-signature-stamp-format-enum.adapter';

export const apiMarketOrganizationSettingsAltDtoAdapter = (source?: MarketOrganizationSettingsAlt | null): ApiMarketOrganizationSettingsAltDto => {
  return {
    AlwaysSendInvitationsForVendors: source?.alwaysSendInvitationsForVendors,
    AutoProlongationEnabled: source?.autoProlongationEnabled,
    HideApplicationSettings: source?.hideApplicationSettings === null ? undefined : apiHideApplicationSettingsDtoAdapter(source?.hideApplicationSettings),
    IsSendToEis: source?.isSendToEis,
    PoaRequiredState: source?.poaRequiredState === null ? undefined : apiM4DDealSignRequiredEnumAdapter(source?.poaRequiredState),
    PreventEisProtocolPublish: source?.preventEisProtocolPublish,
    ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
    SignatureStampFormat: source?.signatureStampFormat === null ? undefined : apiSignatureStampFormatEnumAdapter(source?.signatureStampFormat),
    SurpervisorHost: source?.surpervisorHost,
  };
}
