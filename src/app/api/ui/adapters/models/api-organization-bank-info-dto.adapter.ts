import { OrganizationBankInfo } from '../../models/organization-bank-info.interface';
import { ApiOrganizationBankInfoDto } from '../../../swagger/models/api-organization-bank-info-dto';

export const apiOrganizationBankInfoDtoAdapter = (source?: OrganizationBankInfo | null): ApiOrganizationBankInfoDto => {
  return {
    BankAddress: source?.bankAddress,
    BankBik: source?.bankBik,
    BankCheckingAccount: source?.bankCheckingAccount,
    BankCorrespondentAccount: source?.bankCorrespondentAccount,
    BankName: source?.bankName,
    BankPersonalAccount: source?.bankPersonalAccount,
    Id: source?.id,
  };
}
