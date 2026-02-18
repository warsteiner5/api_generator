import { ApiMarketOrganizationCommonBankDto } from '../../../swagger/models/api-market-organization-common-bank-dto';
import { MarketOrganizationCommonBank } from '../../models/market-organization-common-bank.interface';

export function adaptMarketOrganizationCommonBankToUI(source?: ApiMarketOrganizationCommonBankDto | null): MarketOrganizationCommonBank {
  return {
    bankAddress: source?.BankAddress ?? '',
    bankName: source?.BankName ?? '',
    bik: source?.Bik ?? '',
    correspondentAccount: source?.CorrespondentAccount ?? '',
    id: source?.Id ?? 0,
    personalAccount: source?.PersonalAccount ?? '',
    settlementAccount: source?.SettlementAccount ?? '',
  };
}
