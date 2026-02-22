import { ApiBankingDetailsDto } from '../../../swagger/models/api-banking-details-dto';
import { BankingDetails } from '../../models/banking-details.interface';

export const bankingDetailsAdapter = (source?: ApiBankingDetailsDto | null): BankingDetails => {
  return {
    bankAddress: source?.BankAddress,
    bankName: source?.BankName,
    bik: source?.Bik,
    id: source?.Id,
    loroAccount: source?.LoroAccount,
    name: source?.Name,
    personalAccount: source?.PersonalAccount,
    settlementAccount: source?.SettlementAccount,
  };
}
