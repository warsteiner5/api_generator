import { BankingDetails } from '../../models/banking-details.interface';
import { ApiBankingDetailsDto } from '../../../swagger/models/api-banking-details-dto';

export function adaptApiBankingDetailsDto(source?: BankingDetails | null): ApiBankingDetailsDto {
  return {
    BankAddress: source?.bankAddress,
    BankName: source?.bankName,
    Bik: source?.bik,
    Id: source?.id,
    LoroAccount: source?.loroAccount,
    Name: source?.name,
    PersonalAccount: source?.personalAccount,
    SettlementAccount: source?.settlementAccount,
  };
}
