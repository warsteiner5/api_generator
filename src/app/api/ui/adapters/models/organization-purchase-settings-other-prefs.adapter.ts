import { ApiOrganizationPurchaseSettingsOtherPrefsDto } from '../../../swagger/models/api-organization-purchase-settings-other-prefs-dto';
import { OrganizationPurchaseSettingsOtherPrefs } from '../../models/organization-purchase-settings-other-prefs.interface';

export const organizationPurchaseSettingsOtherPrefsAdapter = (source?: ApiOrganizationPurchaseSettingsOtherPrefsDto | null): OrganizationPurchaseSettingsOtherPrefs => {
  return {
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors,
    autoProlongationEnabled: source?.AutoProlongationEnabled,
  };
}
