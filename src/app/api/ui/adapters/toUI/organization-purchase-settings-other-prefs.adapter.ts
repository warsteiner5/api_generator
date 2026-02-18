import { ApiOrganizationPurchaseSettingsOtherPrefsDto } from '../../../swagger/models/api-organization-purchase-settings-other-prefs-dto';
import { OrganizationPurchaseSettingsOtherPrefs } from '../../models/organization-purchase-settings-other-prefs.interface';

export function adaptOrganizationPurchaseSettingsOtherPrefsToUI(source?: ApiOrganizationPurchaseSettingsOtherPrefsDto | null): OrganizationPurchaseSettingsOtherPrefs {
  return {
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors ?? false,
    autoProlongationEnabled: source?.AutoProlongationEnabled ?? false,
  };
}
