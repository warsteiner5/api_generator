import { M4DDealSignRequiredEnum } from '../enums/m-4-d-deal-sign-required.enum';

export interface OrganizationSettings {
  alwaysSendInvitationsForVendors: boolean;
  isNeedEds: boolean;
  isPublishTradeOnGlobalMarketAfterProlongation: boolean;
  m4DDealSignRequired: M4DDealSignRequiredEnum;
  showAppReviewDoc: boolean;
  tradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz: boolean;
}
