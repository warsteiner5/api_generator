import { OrganizationSettings } from '../../models/organization-settings.interface';
import { ApiOrganizationSettingsDto } from '../../../swagger/models/api-organization-settings-dto';
import { apiM4DDealSignRequiredEnumAdapter } from '../enums/api-m-4-d-deal-sign-required-enum.adapter';

export const apiOrganizationSettingsDtoAdapter = (source?: OrganizationSettings | null): ApiOrganizationSettingsDto => {
  return {
    AlwaysSendInvitationsForVendors: source?.alwaysSendInvitationsForVendors,
    IsNeedEds: source?.isNeedEds,
    IsPublishTradeOnGlobalMarketAfterProlongation: source?.isPublishTradeOnGlobalMarketAfterProlongation,
    M4DDealSignRequired: source?.m4DDealSignRequired === null ? undefined : apiM4DDealSignRequiredEnumAdapter(source?.m4DDealSignRequired),
    ShowAppReviewDoc: source?.showAppReviewDoc,
    TradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz: source?.tradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz,
  };
}
