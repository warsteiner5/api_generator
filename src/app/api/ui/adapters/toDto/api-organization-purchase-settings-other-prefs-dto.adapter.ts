import { OrganizationPurchaseSettingsOtherPrefs } from '../../models/organization-purchase-settings-other-prefs.interface';
import { ApiOrganizationPurchaseSettingsOtherPrefsDto } from '../../../swagger/models/api-organization-purchase-settings-other-prefs-dto';

export function adaptApiOrganizationPurchaseSettingsOtherPrefsDto(source?: OrganizationPurchaseSettingsOtherPrefs | null): ApiOrganizationPurchaseSettingsOtherPrefsDto {
  return {
    AlwaysSendInvitationsForVendors: source?.alwaysSendInvitationsForVendors,
    AutoProlongationEnabled: source?.autoProlongationEnabled,
  };
}
