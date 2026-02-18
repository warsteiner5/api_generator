import { OrganizationPurchaseSettingsEisPrefs } from '../../models/organization-purchase-settings-eis-prefs.interface';
import { ApiOrganizationPurchaseSettingsEisPrefsDto } from '../../../swagger/models/api-organization-purchase-settings-eis-prefs-dto';

export function adaptApiOrganizationPurchaseSettingsEisPrefsDto(source?: OrganizationPurchaseSettingsEisPrefs | null): ApiOrganizationPurchaseSettingsEisPrefsDto {
  return {
    CanSendTradeToEIS: source?.canSendTradeToEIS,
    HideProtocolForTradeWithSentToEis: source?.hideProtocolForTradeWithSentToEis,
    ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
  };
}
