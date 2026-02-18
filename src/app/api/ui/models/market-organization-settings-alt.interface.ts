import { HideApplicationSettings } from './hide-application-settings.interface';
import { M4DDealSignRequiredEnum } from '../enums/m-4-d-deal-sign-required.enum';
import { SignatureStampFormatEnum } from '../enums/signature-stamp-format.enum';

export interface MarketOrganizationSettingsAlt {
  alwaysSendInvitationsForVendors: boolean;
  autoProlongationEnabled: boolean;
  hideApplicationSettings: HideApplicationSettings;
  isSendToEis: boolean;
  poaRequiredState: M4DDealSignRequiredEnum;
  preventEisProtocolPublish: boolean;
  showProtocolForTradeWithApplicationEndDateWithoutSentToEis: boolean;
  showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: boolean;
  signatureStampFormat: SignatureStampFormatEnum;
  surpervisorHost: string;
}
