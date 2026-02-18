import { Account } from '../../models/account.interface';
import { ApiAccountDto } from '../../../swagger/models/api-account-dto';

export function adaptApiAccountDto(source?: Account | null): ApiAccountDto {
  return {
    ApplicationId: source?.applicationId,
    AvailableSum: source?.availableSum,
    Blocked: source?.blocked,
    BlockedSum: source?.blockedSum,
    CreateDateTime: source?.createDateTime,
    Currency: source?.currency,
    Description: source?.description,
    EtpName: source?.etpName,
    Id: source?.id,
    IsRefundMoneyAvailable: source?.isRefundMoneyAvailable,
    IsShowRefundInstruction: source?.isShowRefundInstruction,
    LastChangeDateTime: source?.lastChangeDateTime,
    Number: source?.number,
    OrganizationId: source?.organizationId,
    PaymentSum: source?.paymentSum,
    PlatformId: source?.platformId,
    RedirectUrlForSfs: source?.redirectUrlForSfs,
    RefundMoneyUrl: source?.refundMoneyUrl,
    WithdrawalSum: source?.withdrawalSum,
  };
}
