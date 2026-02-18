/* tslint:disable */
/* eslint-disable */
export interface ApiAccountDto {
  ApplicationId?: number;
  AvailableSum?: number;
  Blocked?: boolean;
  BlockedSum?: number;
  CreateDateTime?: string;
  Currency?: string | null;
  Description?: string | null;
  EtpName?: string | null;
  Id?: number;
  IsRefundMoneyAvailable?: boolean;
  IsShowRefundInstruction?: boolean;
  LastChangeDateTime?: string;
  Number?: string | null;
  OrganizationId?: number | null;
  PaymentSum?: number;
  PlatformId?: number;
  RedirectUrlForSfs?: string | null;
  RefundMoneyUrl?: string | null;
  WithdrawalSum?: number;
}
