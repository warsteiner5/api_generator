import { ApiOrganizationSettingsDto } from '../../../swagger/models/api-organization-settings-dto';
import { OrganizationSettings } from '../../models/organization-settings.interface';
import { adaptM4DDealSignRequiredEnumToUI } from './m-4-d-deal-sign-required-enum.adapter';

export function adaptOrganizationSettingsToUI(source?: ApiOrganizationSettingsDto | null): OrganizationSettings {
  return {
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors ?? false,
    isNeedEds: source?.IsNeedEds ?? false,
    isPublishTradeOnGlobalMarketAfterProlongation: source?.IsPublishTradeOnGlobalMarketAfterProlongation ?? false,
    m4DDealSignRequired: adaptM4DDealSignRequiredEnumToUI(source?.M4DDealSignRequired),
    showAppReviewDoc: source?.ShowAppReviewDoc ?? false,
    tradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz: source?.TradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz ?? false,
  };
}
