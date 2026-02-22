import { ApiOrganizationBankInfoDto } from '../../../swagger/models/api-organization-bank-info-dto';
import { OrganizationBankInfo } from '../../models/organization-bank-info.interface';

export const organizationBankInfoAdapter = (source?: ApiOrganizationBankInfoDto | null): OrganizationBankInfo => {
  return {
    bankAddress: source?.BankAddress,
    bankBik: source?.BankBik,
    bankCheckingAccount: source?.BankCheckingAccount,
    bankCorrespondentAccount: source?.BankCorrespondentAccount,
    bankName: source?.BankName,
    bankPersonalAccount: source?.BankPersonalAccount,
    id: source?.Id,
  };
}
