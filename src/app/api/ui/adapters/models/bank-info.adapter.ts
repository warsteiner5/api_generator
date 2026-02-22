import { ApiBankInfoDto } from '../../../swagger/models/api-bank-info-dto';
import { BankInfo } from '../../models/bank-info.interface';

export const bankInfoAdapter = (source?: ApiBankInfoDto | null): BankInfo => {
  return {
    bankAdress: source?.BankAdress,
    bankBik: source?.BankBik,
    bankCheckingAccount: source?.BankCheckingAccount,
    bankCorrespondentAccount: source?.BankCorrespondentAccount,
    bankName: source?.BankName,
    bankPersonalAccount: source?.BankPersonalAccount,
  };
}
