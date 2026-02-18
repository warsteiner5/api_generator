import { BankInfo } from '../../models/bank-info.interface';
import { ApiBankInfoDto } from '../../../swagger/models/api-bank-info-dto';

export function adaptApiBankInfoDto(source?: BankInfo | null): ApiBankInfoDto {
  return {
    BankAdress: source?.bankAdress,
    BankBik: source?.bankBik,
    BankCheckingAccount: source?.bankCheckingAccount,
    BankCorrespondentAccount: source?.bankCorrespondentAccount,
    BankName: source?.bankName,
    BankPersonalAccount: source?.bankPersonalAccount,
  };
}
