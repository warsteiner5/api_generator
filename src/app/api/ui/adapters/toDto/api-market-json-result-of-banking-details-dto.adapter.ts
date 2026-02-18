import { MarketJsonResultOfBankingDetails } from '../../models/market-json-result-of-banking-details.interface';
import { ApiMarketJsonResultOfBankingDetailsDto } from '../../../swagger/models/api-market-json-result-of-banking-details-dto';

export function adaptApiMarketJsonResultOfBankingDetailsDto(source?: MarketJsonResultOfBankingDetails | null): ApiMarketJsonResultOfBankingDetailsDto {
  return (source ?? {}) as ApiMarketJsonResultOfBankingDetailsDto;
}
