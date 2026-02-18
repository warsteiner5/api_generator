import { ApiAccountDto } from '../../../swagger/models/api-account-dto';
import { Account } from '../../models/account.interface';

export function adaptAccountToUI(source?: ApiAccountDto | null): Account {
  return {
    applicationId: source?.ApplicationId ?? 0,
    availableSum: source?.AvailableSum ?? 0,
    blocked: source?.Blocked ?? false,
    blockedSum: source?.BlockedSum ?? 0,
    createDateTime: source?.CreateDateTime ?? '',
    currency: source?.Currency ?? '',
    description: source?.Description ?? '',
    etpName: source?.EtpName ?? '',
    id: source?.Id ?? 0,
    isRefundMoneyAvailable: source?.IsRefundMoneyAvailable ?? false,
    isShowRefundInstruction: source?.IsShowRefundInstruction ?? false,
    lastChangeDateTime: source?.LastChangeDateTime ?? '',
    number: source?.Number ?? '',
    organizationId: source?.OrganizationId ?? 0,
    paymentSum: source?.PaymentSum ?? 0,
    platformId: source?.PlatformId ?? 0,
    redirectUrlForSfs: source?.RedirectUrlForSfs ?? '',
    refundMoneyUrl: source?.RefundMoneyUrl ?? '',
    withdrawalSum: source?.WithdrawalSum ?? 0,
  };
}
