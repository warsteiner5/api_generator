import { ApiMarketJsonResultOfListOfBankingDetailsDto } from '../../../swagger/models/api-market-json-result-of-list-of-banking-details-dto';
import { MarketJsonResultOfListOfBankingDetails } from '../../models/market-json-result-of-list-of-banking-details.interface';

export function adaptMarketJsonResultOfListOfBankingDetailsToUI(source?: ApiMarketJsonResultOfListOfBankingDetailsDto | null): MarketJsonResultOfListOfBankingDetails {
  return (source ?? {}) as MarketJsonResultOfListOfBankingDetails;
}
