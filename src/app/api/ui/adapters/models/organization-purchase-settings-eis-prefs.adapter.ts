import { ApiOrganizationPurchaseSettingsEisPrefsDto } from '../../../swagger/models/api-organization-purchase-settings-eis-prefs-dto';
import { OrganizationPurchaseSettingsEisPrefs } from '../../models/organization-purchase-settings-eis-prefs.interface';

export const organizationPurchaseSettingsEisPrefsAdapter = (source?: ApiOrganizationPurchaseSettingsEisPrefsDto | null): OrganizationPurchaseSettingsEisPrefs => {
  return {
    canSendTradeToEIS: source?.CanSendTradeToEIS,
    hideProtocolForTradeWithSentToEis: source?.HideProtocolForTradeWithSentToEis,
    showProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
  };
}
