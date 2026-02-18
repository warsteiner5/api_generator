/* tslint:disable */
/* eslint-disable */
import { ApiM4DDealSignRequiredEnum } from '../models/api-m-4-d-deal-sign-required-enum';
export interface ApiOrganizationSettingsDto {
  AlwaysSendInvitationsForVendors?: boolean;
  IsNeedEds?: boolean;
  IsPublishTradeOnGlobalMarketAfterProlongation?: boolean;
  M4DDealSignRequired?: ApiM4DDealSignRequiredEnum;
  ShowAppReviewDoc?: boolean;
  TradeComesInFillingApplicationStateIfAllApplicationsAreNotSatisfyTz?: boolean;
}
