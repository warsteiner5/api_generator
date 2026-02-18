import { MarketOrganizationCommonBank } from '../../models/market-organization-common-bank.interface';
import { ApiMarketOrganizationCommonBankDto } from '../../../swagger/models/api-market-organization-common-bank-dto';

export function adaptApiMarketOrganizationCommonBankDto(source?: MarketOrganizationCommonBank | null): ApiMarketOrganizationCommonBankDto {
  return {
    BankAddress: source?.bankAddress,
    BankName: source?.bankName,
    Bik: source?.bik,
    CorrespondentAccount: source?.correspondentAccount,
    Id: source?.id,
    PersonalAccount: source?.personalAccount,
    SettlementAccount: source?.settlementAccount,
  };
}
