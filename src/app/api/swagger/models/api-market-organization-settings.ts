/* tslint:disable */
/* eslint-disable */
import { ApiHideApplicationSettingsDto } from '../models/api-hide-application-settings-dto';
import { ApiM4DDealSignRequiredEnum } from '../models/api-m-4-d-deal-sign-required-enum';
import { ApiSignatureStampFormatEnum } from '../models/api-signature-stamp-format-enum';
export interface ApiMarketOrganizationSettingsAltDto {
  AlwaysSendInvitationsForVendors?: boolean;
  AutoProlongationEnabled?: boolean;
  HideApplicationSettings?: ApiHideApplicationSettingsDto | null;
  IsSendToEis?: boolean;
  PoaRequiredState?: ApiM4DDealSignRequiredEnum;
  PreventEisProtocolPublish?: boolean;
  ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis?: boolean;
  ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis?: boolean;
  SignatureStampFormat?: ApiSignatureStampFormatEnum;
  SurpervisorHost?: string | null;
}
