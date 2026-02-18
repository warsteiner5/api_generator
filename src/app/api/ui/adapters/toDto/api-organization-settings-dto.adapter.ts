import { OrganizationSettings } from '../../models/organization-settings.interface';
import { ApiOrganizationSettingsDto } from '../../../swagger/models/api-organization-settings-dto';
import { adaptApiM4DDealSignRequiredEnum } from './api-m-4-d-deal-sign-required-enum.adapter';

export function adaptApiOrganizationSettingsDto(source?: OrganizationSettings | null): ApiOrganizationSettingsDto {
  return {
    AlwaysSendInvitationsForVendors: source?.alwaysSendInvitationsForVendors,
    IsNeedEds: source?.isNeedEds,
    IsPublishTradeOnGlobalMarketAfterProlongation: source?.isPublishTradeOnGlobalMarketAfterProlongation,
    M4DDealSignRequired: adaptApiM4DDealSignRequiredEnum(source?.m4DDealSignRequired),
    ShowAppReviewDoc: source?.showAppReviewDoc,
    TradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz: source?.tradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz,
  };
}
