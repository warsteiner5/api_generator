import { ApiOrganizationSettingsDto } from '../../../swagger/models/api-organization-settings-dto';
import { OrganizationSettings } from '../../models/organization-settings.interface';
import { m4DDealSignRequiredEnumAdapter } from '../enums/m-4-d-deal-sign-required-enum.adapter';

export const organizationSettingsAdapter = (source?: ApiOrganizationSettingsDto | null): OrganizationSettings => {
  return {
    alwaysSendInvitationsForVendors: source?.AlwaysSendInvitationsForVendors,
    isNeedEds: source?.IsNeedEds,
    isPublishTradeOnGlobalMarketAfterProlongation: source?.IsPublishTradeOnGlobalMarketAfterProlongation,
    m4DDealSignRequired: source?.M4DDealSignRequired === null ? undefined : m4DDealSignRequiredEnumAdapter(source?.M4DDealSignRequired),
    showAppReviewDoc: source?.ShowAppReviewDoc,
    tradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz: source?.TradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz,
  };
}
