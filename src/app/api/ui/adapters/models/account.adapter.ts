import { ApiAccountDto } from '../../../swagger/models/api-account-dto';
import { Account } from '../../models/account.interface';

export const accountAdapter = (source?: ApiAccountDto | null): Account => {
  return {
    applicationId: source?.ApplicationId,
    availableSum: source?.AvailableSum,
    blocked: source?.Blocked,
    blockedSum: source?.BlockedSum,
    createDateTime: source?.CreateDateTime,
    currency: source?.Currency,
    description: source?.Description,
    etpName: source?.EtpName,
    id: source?.Id,
    isRefundMoneyAvailable: source?.IsRefundMoneyAvailable,
    isShowRefundInstruction: source?.IsShowRefundInstruction,
    lastChangeDateTime: source?.LastChangeDateTime,
    number: source?.Number,
    organizationId: source?.OrganizationId,
    paymentSum: source?.PaymentSum,
    platformId: source?.PlatformId,
    redirectUrlForSfs: source?.RedirectUrlForSfs,
    refundMoneyUrl: source?.RefundMoneyUrl,
    withdrawalSum: source?.WithdrawalSum,
  };
}
