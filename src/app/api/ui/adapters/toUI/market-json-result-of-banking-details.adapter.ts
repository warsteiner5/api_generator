import { ApiMarketJsonResultOfBankingDetailsDto } from '../../../swagger/models/api-market-json-result-of-banking-details-dto';
import { MarketJsonResultOfBankingDetails } from '../../models/market-json-result-of-banking-details.interface';

export function adaptMarketJsonResultOfBankingDetailsToUI(source?: ApiMarketJsonResultOfBankingDetailsDto | null): MarketJsonResultOfBankingDetails {
  return (source ?? {}) as MarketJsonResultOfBankingDetails;
}
