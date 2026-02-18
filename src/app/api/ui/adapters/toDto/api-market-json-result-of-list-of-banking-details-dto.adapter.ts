import { MarketJsonResultOfListOfBankingDetails } from '../../models/market-json-result-of-list-of-banking-details.interface';
import { ApiMarketJsonResultOfListOfBankingDetailsDto } from '../../../swagger/models/api-market-json-result-of-list-of-banking-details-dto';

export function adaptApiMarketJsonResultOfListOfBankingDetailsDto(source?: MarketJsonResultOfListOfBankingDetails | null): ApiMarketJsonResultOfListOfBankingDetailsDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfBankingDetailsDto;
}
