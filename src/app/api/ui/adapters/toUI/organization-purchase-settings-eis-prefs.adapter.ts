import { ApiOrganizationPurchaseSettingsEisPrefsDto } from '../../../swagger/models/api-organization-purchase-settings-eis-prefs-dto';
import { OrganizationPurchaseSettingsEisPrefs } from '../../models/organization-purchase-settings-eis-prefs.interface';

export function adaptOrganizationPurchaseSettingsEisPrefsToUI(source?: ApiOrganizationPurchaseSettingsEisPrefsDto | null): OrganizationPurchaseSettingsEisPrefs {
  return {
    canSendTradeToEIS: source?.CanSendTradeToEIS ?? false,
    hideProtocolForTradeWithSentToEis: source?.HideProtocolForTradeWithSentToEis ?? false,
    showProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis ?? false,
    showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis ?? false,
  };
}
